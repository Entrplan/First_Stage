import { GenericModel } from 'src/app/shared/model/generic-model';
import { i18n } from 'src/i18n';
import DateTimeField from 'src/app/shared/fields/date-time-field';
import IdField from 'src/app/shared/fields/id-field';
import DateTimeRangeField from 'src/app/shared/fields/date-time-range-field';
import StringField from 'src/app/shared/fields/string-field';
import EnumeratorField from 'src/app/shared/fields/enumerator-field';

function label(name) {
  return i18n(`entities.commonComitees.fields.${name}`);
}

function enumeratorLabel(name, value) {
  return i18n(
    `entities.commonComitees.enumerators.${name}.${value}`,
  );
}

function placeholder(name) {
  return i18n(
    `entities.commonComitees.placeholders.${name}`,
  );
}

const fields = {
  id: new IdField('id', label('id')),
  addedCommittee: new StringField(
    'addedCommittee',
    label('addedCommittee'),
    {
      placeholder: placeholder('addedCommittee'),
    },
  ),
  menus: new EnumeratorField(
    'menus',
    label('menus'),
    [
      {
        id: 'لجنة التسعير',
        label: enumeratorLabel('menus', 'لجنة التسعير'),
      },
      {
        id: ' لجنة احتساب نسبة الخياسة',
        label: enumeratorLabel(
          'menus',
          ' لجنة احتساب نسبة الخياسة',
        ),
      },
      {
        id: 'لجنة احتساب التكاليف',
        label: enumeratorLabel(
          'menus',
          'لجنة احتساب التكاليف',
        ),
      },
      {
        id: 'لجان التحقيق',
        label: enumeratorLabel('menus', 'لجان التحقيق'),
      },
      {
        id: 'لجنة تفقد الجودة',
        label: enumeratorLabel('menus', 'لجنة تفقد الجودة'),
      },
      {
        id: 'لجنة دراسة السوق',
        label: enumeratorLabel('menus', 'لجنة دراسة السوق'),
      },
      {
        id: 'لجنة التوظيف',
        label: enumeratorLabel('menus', 'لجنة التوظيف'),
      },
      {
        id: 'لجنة الجرد',
        label: enumeratorLabel('menus', 'لجنة الجرد'),
      },
    ],
    {},
  ),
  createdAt: new DateTimeField(
    'createdAt',
    label('createdAt'),
  ),
  updatedAt: new DateTimeField(
    'updatedAt',
    label('updatedAt'),
  ),
  createdAtRange: new DateTimeRangeField(
    'createdAtRange',
    label('createdAtRange'),
  ),
};

export class CommonComiteesModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
