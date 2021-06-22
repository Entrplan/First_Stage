import { i18n } from 'src/i18n';
import { values as _values } from 'lodash';

export class Roles {
  static get values() {
    return {
      company: 'company',
      manager: 'manager',
      candidate: 'candidate',
      employee: 'employee',
    };
  }

  static labelOf(roleId) {
    if (!this.values[roleId]) {
      return roleId;
    }

    return i18n(`roles.${roleId}.label`);
  }

  static descriptionOf(roleId) {
    if (!this.values[roleId]) {
      return roleId;
    }

    return i18n(`roles.${roleId}.description`);
  }

  static get selectOptions() {
    return _values(this.values).map((value) => ({
      id: value,
      value: value,
      title: this.descriptionOf(value),
      label: this.labelOf(value),
    }));
  }
}
