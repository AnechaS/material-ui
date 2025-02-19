import transformAccordionClasses from '../accordion-summary-classes';
import transformAccordionProps from '../accordion-props';
import transformAlertClasses from '../alert-classes';
import transformAvatarGroupProps from '../avatar-group-props';
import transformAutocompleteProps from '../autocomplete-props';
import transformAvatarProps from '../avatar-props';
import transformBackdropProps from '../backdrop-props';
import transformButtonClasses from '../button-classes';
import transformButtonGroupClasses from '../button-group-classes';
import transformChipClasses from '../chip-classes';
import transformCircularProgressClasses from '../circular-progress-classes';
import transformDividerProps from '../divider-props';
import transformDrawerClasses from '../drawer-classes';
import transformFilledInputProps from '../filled-input-props';
import transformFormControlLabelProps from '../form-control-label-props';
import transformImageListItemBarClasses from '../image-list-item-bar-classes';
import transformInputBaseProps from '../input-base-props';
import transformInputProps from '../input-props';
import transformListItemTextProps from '../list-item-text-props';
import transformLinearProgressClasses from '../linear-progress-classes';
import transformModalProps from '../modal-props';
import transformOutlinedInputProps from '../outlined-input-props';
import transformPaginationItemClasses from '../pagination-item-classes';
import transformSpeedDialProps from '../speed-dial-props';
import transformTableSortLabelClasses from '../table-sort-label-classes';
import transformSelectClasses from '../select-classes';
import transformStepConnectorClasses from '../step-connector-classes';
import transformStepContentProps from '../step-content-props';
import transformStepLabelProps from '../step-label-props';
import transformTextFieldProps from '../text-field-props';
import transformTabClasses from '../tab-classes';
import transformToggleButtonGroupClasses from '../toggle-button-group-classes';
import transformTooltipProps from '../tooltip-props';
import transformTablePaginationProps from '../table-pagination-props';
import transformCardHeaderProps from '../card-header-props';
import transformPopoverProps from '../popover-props';
import transformSliderClasses from '../slider-classes';
import transformMobileStepperProps from '../mobile-stepper-props';

/**
 * @param {import('jscodeshift').FileInfo} file
 * @param {import('jscodeshift').API} api
 */
export default function deprecationsAll(file, api, options) {
  file.source = transformAccordionClasses(file, api, options);
  file.source = transformAccordionProps(file, api, options);
  file.source = transformAlertClasses(file, api, options);
  file.source = transformAvatarGroupProps(file, api, options);
  file.source = transformAutocompleteProps(file, api, options);
  file.source = transformAvatarProps(file, api, options);
  file.source = transformBackdropProps(file, api, options);
  file.source = transformButtonClasses(file, api, options);
  file.source = transformButtonGroupClasses(file, api, options);
  file.source = transformChipClasses(file, api, options);
  file.source = transformCircularProgressClasses(file, api, options);
  file.source = transformDividerProps(file, api, options);
  file.source = transformDrawerClasses(file, api, options);
  file.source = transformFilledInputProps(file, api, options);
  file.source = transformFormControlLabelProps(file, api, options);
  file.source = transformImageListItemBarClasses(file, api, options);
  file.source = transformInputBaseProps(file, api, options);
  file.source = transformInputProps(file, api, options);
  file.source = transformListItemTextProps(file, api, options);
  file.source = transformLinearProgressClasses(file, api, options);
  file.source = transformModalProps(file, api, options);
  file.source = transformOutlinedInputProps(file, api, options);
  file.source = transformPaginationItemClasses(file, api, options);
  file.source = transformSpeedDialProps(file, api, options);
  file.source = transformStepConnectorClasses(file, api, options);
  file.source = transformStepContentProps(file, api, options);
  file.source = transformStepLabelProps(file, api, options);
  file.source = transformTableSortLabelClasses(file, api, options);
  file.source = transformTextFieldProps(file, api, options);
  file.source = transformSelectClasses(file, api, options);
  file.source = transformTabClasses(file, api, options);
  file.source = transformToggleButtonGroupClasses(file, api, options);
  file.source = transformTooltipProps(file, api, options);
  file.source = transformTablePaginationProps(file, api, options);
  file.source = transformCardHeaderProps(file, api, options);
  file.source = transformPopoverProps(file, api, options);
  file.source = transformSliderClasses(file, api, options);
  file.source = transformMobileStepperProps(file, api, options);

  return file.source;
}
