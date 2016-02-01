import $ from 'jQuery';
import React from 'react';
import ReactDOM from 'react-dom';
import SilverStripeComponent from 'silverstripe-component';
import ReactTestUtils from 'react-addons-test-utils';

export default class BulkActionsComponent extends SilverStripeComponent {

	constructor(props) {
		super(props);

		this.onChangeValue = this.onChangeValue.bind(this);
	}

	componentDidMount() {
		var $select = $(ReactDOM.findDOMNode(this)).find('.dropdown');

		$select.chosen({
			'allow_single_deselect': true,
			'disable_search_threshold': 20
		});

		// Chosen stops the change event from reaching React so we have to simulate a click.
		$select.change(() => ReactTestUtils.Simulate.click($select.find(':selected')[0]));
	}

	render() {
		return <div className="gallery__bulk fieldholder-small">
			<select className="dropdown no-change-track no-chzn" tabIndex="0" data-placeholder={this.props.placeholder} style={{width: '160px'}}>
				<option selected disabled hidden value=''></option>
				{this.props.options.map((option, i) => {
					return <option key={i} onClick={this.onChangeValue} value={option.value}>{option.label}</option>;
				})}
			</select>
		</div>;
	}

	getOptionByValue(value) {
		// Using for loop cos IE10 doesn't handle 'for of',
		// which gets transcompiled into a function which uses Symbol,
		// the thing IE10 dies on.
		for (let i = 0; i < this.props.options.length; i += 1) {
			if (this.props.options[i].value === value) {
				return this.props.options[i];
			}
		}

		return null;
	}

	applyAction(value) {
		// We only have 'delete' right now...
		switch (value) {
			case 'delete':
				this.props.backend.delete(this.props.getSelectedFiles());
			default:
				return false;
		}
	}

	onChangeValue(event) {
		var option = this.getOptionByValue(event.target.value);

		// Make sure a valid option has been selected.
		if (option === null) {
			return;
		}
		
		this.setState({ value: option.value });

		if (option.destructive === true) {
			if (confirm(ss.i18n.sprintf(ss.i18n._t('AssetGalleryField.BULK_ACTIONS_CONFIRM'), option.label))) {
				this.applyAction(option.value);
			}
		} else {
			this.applyAction(option.value);
		}

		// Reset the dropdown to it's placeholder value.
		$(ReactDOM.findDOMNode(this)).find('.dropdown').val('').trigger('liszt:updated');
	}
};
