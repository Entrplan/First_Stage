const en = {
  common: {
    or: 'or',
    cancel: 'Cancel',
    reset: 'Reset',
    save: 'Save',
    search: 'Search',
    edit: 'Edit',
    remove: 'Remove',
    new: 'New',
    export: 'Export to Excel',
    noDataToExport: 'No data to export',
    import: 'Import',
    discard: 'Discard',
    yes: 'Yes',
    no: 'No',
    pause: 'Pause',
    areYouSure: 'Are you sure?',
    view: 'View',
    destroy: 'Delete',
    mustSelectARow: 'Must select a row',
    confirm: 'Confirm',
    start: 'Start',
    end: 'End',
    filters: 'Filters',
  },

  app: {
    title: 'Application',
  },

  api: {
    menu: 'API',
  },

  entities: {
    jobs: {
      name: 'jobs',
      label: 'jobs',
      menu: 'jobs',
      exporterFileName: 'jobs_export',
      list: {
        menu: 'jobs',
        title: 'jobs',
      },
      create: {
        success: 'jobs successfully saved',
      },
      update: {
        success: 'jobs successfully saved',
      },
      destroy: {
        success: 'jobs successfully deleted',
      },
      destroyAll: {
        success: 'jobs(s) successfully deleted',
      },
      edit: {
        title: 'Edit jobs',
      },
      fields: {
        id: 'Id',
        positionName: 'Position Name',
        department: 'Departments',
        supervisor: 'Supervisor',
        jobLocation: 'Job Location',
        jobCode: 'Job Code',
        generalDescription: 'General Description',
        generalGoals: 'General Goals',
        detailedGoals: 'Detailed Goals',
        academicCertificates: 'Academic Certificates',
        trainingCertificates: 'Training Certificates',
        professionalCertificates:
          'Professional Certificates',
        softSkills: 'Soft Skills',
        managementSkills: 'المهارات الإدارية',
        artitistikSkills: 'ArtitistikSkills',
        jobFramework: 'أطر الوظيفة',
        connectionLevel: 'Connection Level',
        commonCommittees: 'أللجان المشتركة',
        jobRequirments: 'متطلبات الوظيفة',
        jobPath: 'المسار الوظيفي',
        tasksDuties: 'المهام و الواجبات',
        administrativeFinancialPowers:
          'الصلاحيات الإدارية و المالية',
        cardInformation: 'بيانات البطاقة',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {},
      placeholders: {
        supervisor: 'المدير المباشر',
        jobLocation: 'موقع العمل',
        jobCode: 'الرقم/الرمز',
        generalDescription: 'الوصف العام',
        generalGoals: 'الاهداف العامة',
        detailedGoals: 'الاهداف التفصيلية',
      },
      hints: {},
      new: {
        title: 'New jobs',
      },
      view: {
        title: 'View jobs',
      },
      importer: {
        title: 'Import jobs',
        fileName: 'jobs_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    candidates: {
      name: 'candidates',
      label: 'Candidates',
      menu: 'Candidates',
      exporterFileName: 'candidates_export',
      list: {
        menu: 'Candidates',
        title: 'Candidates',
      },
      create: {
        success: 'Candidates successfully saved',
      },
      update: {
        success: 'Candidates successfully saved',
      },
      destroy: {
        success: 'Candidates successfully deleted',
      },
      destroyAll: {
        success: 'Candidates(s) successfully deleted',
      },
      edit: {
        title: 'Edit Candidates',
      },
      fields: {
        id: 'Id',
        candidateName: 'اسم المرشح',
        currentPosition: 'المنصب الحالى',
        candidateReference: 'مرجع المرشح',
        gender: 'نوع الجنس',
        academicCertificateSpecialization:
          'الشهادة العلمية و الاختصاص',
        trainingCertificates: 'شهادات_تدريب',
        currentCompany: 'الشركة الحالية',
        noticePeriodRange: 'فترة إشعار',
        noticePeriod: 'فترة إشعار',
        currentSalaryRange: 'الراتب الحالي',
        currentSalary: 'الراتب الحالي',
        expectedSalaryRange: 'الراتب المتوقع',
        expectedSalary: 'الراتب المتوقع',
        softSkills: 'مهارات ناعمة',
        managementSkills: 'Managment Skills',
        artisticSkills: 'مهارات فنية',
        candidateCreatedDateRange: 'تاريخ إنشاء المرشح',
        candidateCreatedDate: 'تاريخ إنشاء المرشح',
        jobs: 'الوظيفة المسندة',
        resume: 'Resume',
        photo: 'Photo ',
        tactLevel: 'مستوى اللباقة',
        yearsExperienceRange: 'سنوات الخبرة',
        yearsExperience: 'سنوات الخبرة',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        gender: {
          ذكر: 'ذكر',
          أنثى: 'أنثى',
        },
        tactLevel: {
          عالي: 'عالي',
          عادي: 'عادي',
        },
      },
      placeholders: {
        candidateName: 'اسم المرشح',
        currentPosition: 'المنصب الحالى',
        candidateReference: 'مرجع المرشح',
        gender: 'نوع الجنس',
        academicCertificateSpecialization:
          'الشهادة العلمية و الاختصاص',
        currentCompany: 'الشركة الحالية',
        noticePeriod: 'فترة إشعار',
        candidateCreatedDate: 'تاريخ إنشاء المرشح',
      },
      hints: {
        resume: 'Resume',
        photo: 'Photo ',
      },
      new: {
        title: 'New Candidates',
      },
      view: {
        title: 'View Candidates',
      },
      importer: {
        title: 'Import Candidates',
        fileName: 'candidates_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    academicCertificates: {
      name: 'academicCertificates',
      label: 'Academic Certificates',
      menu: 'Academic Certificates',
      exporterFileName: 'academicCertificates_export',
      list: {
        menu: 'Academic Certificates',
        title: 'Academic Certificates',
      },
      create: {
        success: 'Academic Certificates successfully saved',
      },
      update: {
        success: 'Academic Certificates successfully saved',
      },
      destroy: {
        success:
          'Academic Certificates successfully deleted',
      },
      destroyAll: {
        success:
          'Academic Certificates(s) successfully deleted',
      },
      edit: {
        title: 'Edit Academic Certificates',
      },
      fields: {
        id: 'Id',
        academicCertificates: 'Academic Certificates',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'New Academic Certificates',
      },
      view: {
        title: 'View Academic Certificates',
      },
      importer: {
        title: 'Import Academic Certificates',
        fileName: 'academicCertificates_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    softSkills: {
      name: 'softSkills',
      label: 'Soft Skills',
      menu: 'Soft Skills',
      exporterFileName: 'softSkills_export',
      list: {
        menu: 'Soft Skills',
        title: 'Soft Skills',
      },
      create: {
        success: 'Soft Skills successfully saved',
      },
      update: {
        success: 'Soft Skills successfully saved',
      },
      destroy: {
        success: 'Soft Skills successfully deleted',
      },
      destroyAll: {
        success: 'Soft Skills(s) successfully deleted',
      },
      edit: {
        title: 'Edit Soft Skills',
      },
      fields: {
        id: 'Id',
        name: 'Soft Skills',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {},
      placeholders: {
        name: 'Soft Skills',
      },
      hints: {
        name: 'Soft Skills',
      },
      new: {
        title: 'New Soft Skills',
      },
      view: {
        title: 'View Soft Skills',
      },
      importer: {
        title: 'Import Soft Skills',
        fileName: 'softSkills_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    trainingCertificates: {
      name: 'trainingCertificates',
      label: 'Training Certificates',
      menu: 'Training Certificates',
      exporterFileName: 'trainingCertificates_export',
      list: {
        menu: 'Training Certificates',
        title: 'Training Certificates',
      },
      create: {
        success: 'Training Certificates successfully saved',
      },
      update: {
        success: 'Training Certificates successfully saved',
      },
      destroy: {
        success:
          'Training Certificates successfully deleted',
      },
      destroyAll: {
        success:
          'Training Certificates(s) successfully deleted',
      },
      edit: {
        title: 'Edit Training Certificates',
      },
      fields: {
        id: 'Id',
        trainingCertificates: 'Training certificates',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'New Training Certificates',
      },
      view: {
        title: 'View Training Certificates',
      },
      importer: {
        title: 'Import Training Certificates',
        fileName: 'trainingCertificates_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    professionalCertifications: {
      name: 'professionalCertifications',
      label: 'Professional Certifications',
      menu: 'Professional Certifications',
      exporterFileName: 'professionalCertifications_export',
      list: {
        menu: 'Professional Certifications',
        title: 'Professional Certifications',
      },
      create: {
        success:
          'Professional Certifications successfully saved',
      },
      update: {
        success:
          'Professional Certifications successfully saved',
      },
      destroy: {
        success:
          'Professional Certifications successfully deleted',
      },
      destroyAll: {
        success:
          'Professional Certifications(s) successfully deleted',
      },
      edit: {
        title: 'Edit Professional Certifications',
      },
      fields: {
        id: 'Id',
        professionalCertifications:
          'Professional Certifications',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {},
      placeholders: {
        professionalCertifications:
          'Professional Certifications',
      },
      hints: {
        professionalCertifications:
          'Professional Certifications',
      },
      new: {
        title: 'New Professional Certifications',
      },
      view: {
        title: 'View Professional Certifications',
      },
      importer: {
        title: 'Import Professional Certifications',
        fileName:
          'professionalCertifications_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    managementSkills: {
      name: 'managementSkills',
      label: 'Managment Skills',
      menu: 'Managment Skills',
      exporterFileName: 'managementSkills_export',
      list: {
        menu: 'Managment Skills',
        title: 'Managment Skills',
      },
      create: {
        success: 'Managment Skills successfully saved',
      },
      update: {
        success: 'Managment Skills successfully saved',
      },
      destroy: {
        success: 'Managment Skills successfully deleted',
      },
      destroyAll: {
        success: 'Managment Skills(s) successfully deleted',
      },
      edit: {
        title: 'Edit Managment Skills',
      },
      fields: {
        id: 'Id',
        managementSkills: 'Managment Skills',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'New Managment Skills',
      },
      view: {
        title: 'View Managment Skills',
      },
      importer: {
        title: 'Import Managment Skills',
        fileName: 'managementSkills_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    artisticSkills: {
      name: 'artisticSkills',
      label: 'Artistic Skills',
      menu: 'Artistic Skills',
      exporterFileName: 'artisticSkills_export',
      list: {
        menu: 'Artistic Skills',
        title: 'Artistic Skills',
      },
      create: {
        success: 'Artistic Skills successfully saved',
      },
      update: {
        success: 'Artistic Skills successfully saved',
      },
      destroy: {
        success: 'Artistic Skills successfully deleted',
      },
      destroyAll: {
        success: 'Artistic Skills(s) successfully deleted',
      },
      edit: {
        title: 'Edit Artistic Skills',
      },
      fields: {
        id: 'Id',
        artisticSkills: 'Artistic Skills',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'New Artistic Skills',
      },
      view: {
        title: 'View Artistic Skills',
      },
      importer: {
        title: 'Import Artistic Skills',
        fileName: 'artisticSkills_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    clients: {
      name: 'clients',
      label: 'العملاء',
      menu: 'العملاء',
      exporterFileName: 'clients_export',
      list: {
        menu: 'العملاء',
        title: 'العملاء',
      },
      create: {
        success: 'العملاء successfully saved',
      },
      update: {
        success: 'العملاء successfully saved',
      },
      destroy: {
        success: 'العملاء successfully deleted',
      },
      destroyAll: {
        success: 'العملاء(s) successfully deleted',
      },
      edit: {
        title: 'Edit العملاء',
      },
      fields: {
        id: 'Id',
        clientName: 'اسم العميل ',
        jobCountRange: 'عدد الjobs',
        jobCount: 'عدد الjobs',
        clientIndustry: 'صناعة العميل',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'New العملاء',
      },
      view: {
        title: 'View العملاء',
      },
      importer: {
        title: 'Import العملاء',
        fileName: 'clients_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    usersNew: {
      name: 'usersNew',
      label: 'المستخدمين',
      menu: 'المستخدمين',
      exporterFileName: 'usersNew_export',
      list: {
        menu: 'المستخدمين',
        title: 'المستخدمين',
      },
      create: {
        success: 'المستخدمين successfully saved',
      },
      update: {
        success: 'المستخدمين successfully saved',
      },
      destroy: {
        success: 'المستخدمين successfully deleted',
      },
      destroyAll: {
        success: 'المستخدمين(s) successfully deleted',
      },
      edit: {
        title: 'Edit المستخدمين',
      },
      fields: {
        id: 'Id',
        email: 'البريد الالكتروني',
        firsrtName: 'الاسم الاول ',
        secondName: 'الاسم الثاني',
        phoneNumber: 'رقم الهاتف',
        roles: 'الأدوار',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        roles: {
          'مدراء الاقسام': 'مدراء الاقسام',
          العملاء: 'العملاء',
          الموظفين: 'الموظفين',
          'مدير الموقع': 'مدير الموقع',
        },
      },
      placeholders: {
        email: 'البريد الالكتروني',
        firsrtName: 'الاسم الاول ',
        secondName: 'الاسم الثاني',
        phoneNumber: 'رقم الهاتف',
        roles: 'الأدوار',
      },
      hints: {},
      new: {
        title: 'New المستخدمين',
      },
      view: {
        title: 'View المستخدمين',
      },
      importer: {
        title: 'Import المستخدمين',
        fileName: 'usersNew_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    jobFrameworks: {
      name: 'jobFrameworks',
      label: 'أطر الوظيفة',
      menu: 'أطر الوظيفة',
      exporterFileName: 'jobFrameworks_export',
      list: {
        menu: 'أطر الوظيفة',
        title: 'أطر الوظيفة',
      },
      create: {
        success: 'أطر الوظيفة successfully saved',
      },
      update: {
        success: 'أطر الوظيفة successfully saved',
      },
      destroy: {
        success: 'أطر الوظيفة successfully deleted',
      },
      destroyAll: {
        success: 'أطر الوظيفة(s) successfully deleted',
      },
      edit: {
        title: 'Edit أطر الوظيفة',
      },
      fields: {
        id: 'Id',
        takeMultipleTasks: 'تولي مهام متعددة',
        impactSalary: 'التأثير على الراتب',
        impactJobGrade: 'التأثير على الدرجة الوظيفية',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'New أطر الوظيفة',
      },
      view: {
        title: 'View أطر الوظيفة',
      },
      importer: {
        title: 'Import أطر الوظيفة',
        fileName: 'jobFrameworks_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    leaveApplicationForm: {
      name: 'leaveApplicationForm',
      label: 'استمارة طلب إجازة',
      menu: 'استمارة طلب إجازة',
      exporterFileName: 'leaveApplicationForm_export',
      list: {
        menu: 'استمارة طلب إجازة',
        title: 'استمارة طلب إجازة',
      },
      create: {
        success: 'استمارة طلب إجازة successfully saved',
      },
      update: {
        success: 'استمارة طلب إجازة successfully saved',
      },
      destroy: {
        success: 'استمارة طلب إجازة successfully deleted',
      },
      destroyAll: {
        success:
          'استمارة طلب إجازة(s) successfully deleted',
      },
      edit: {
        title: 'Edit استمارة طلب إجازة',
      },
      fields: {
        id: 'Id',
        name: 'الاسم',
        position: 'المنصب',
        department: 'القسم',
        dateRange: 'التاريخ',
        date: 'التاريخ',
        contactNo: 'رقم الاتصال',
        employeeNo: 'رقم الموظف',
        absenceWorkRange:
          'الرجاء الموافقة على التغيب عن العمل لمدة ________ يوم',
        absenceWork:
          'الرجاء الموافقة على التغيب عن العمل لمدة ________ يوم',
        periodRange: 'من ______ إلى _______ ، ضمناً',
        period: 'من ______ إلى _______ ، ضمناً',
        specify: 'أسباب الغياب:',
        reasons: 'نوع الاجازات',
        others: ':',
        noDaysRange: 'عدد الأيام المتاحة',
        noDays: 'عدد الأيام المتاحة',
        noTakenRange: 'عدد أيام الإجازة المأخوذة',
        noTaken: 'عدد أيام الإجازة المأخوذة',
        noBalanceRange: 'عدد أيام رصيد الإجازة',
        noBalance: 'عدد أيام رصيد الإجازة',
        remarks: 'ملاحظات',
        status: 'حالة طلب الإجازة',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        reasons: {
          'الإجازة السنوية': 'الإجازة السنوية',
          'الإجازة المرضية': 'الإجازة المرضية',
          'إجازة الأمومة': 'إجازة الأمومة',
          'إجازة الرأفة': 'إجازة الرأفة',
          'إجازة غير مدفوعة الأجر':
            'إجازة غير مدفوعة الأجر',
          'أخرى يرجى التحديد:': 'أخرى يرجى التحديد:',
        },
        status: {
          'تمت الموافقة عليها من قبل الإدارة المختصة':
            'تمت الموافقة عليها من قبل الإدارة المختصة',
          'رفضتها الإدارة المختصة':
            'رفضتها الإدارة المختصة',
          'موافقة إدارة الموارد البشرية':
            'موافقة إدارة الموارد البشرية',
          'رفضنها إدارة الموارد البشرية':
            'رفضنها إدارة الموارد البشرية',
          'موافقة المدير العام': 'موافقة المدير العام',
          'رفضها المدير العام': 'رفضها المدير العام',
        },
      },
      placeholders: {},
      hints: {},
      new: {
        title: 'New استمارة طلب إجازة',
      },
      view: {
        title: 'View استمارة طلب إجازة',
      },
      importer: {
        title: 'Import استمارة طلب إجازة',
        fileName: 'leaveApplicationForm_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    employmentContract: {
      name: 'employmentContract',
      label: 'Employment Contract',
      menu: 'Employment Contract',
      exporterFileName: 'employmentContract_export',
      list: {
        menu: 'Employment Contract',
        title: 'Employment Contract',
      },
      create: {
        success: 'Employment Contract  successfully saved',
      },
      update: {
        success: 'Employment Contract  successfully saved',
      },
      destroy: {
        success:
          'Employment Contract  successfully deleted',
      },
      destroyAll: {
        success:
          'Employment Contract (s) successfully deleted',
      },
      edit: {
        title: 'Edit Employment Contract ',
      },
      fields: {
        id: 'Id',
        contractDateRange: 'تاريخ إبرام العقد',
        contractDate: 'تاريخ إبرام العقد',
        companyRepresentative: 'ممثل الشركة',
        secondParty: 'الطرف الثاني',
        nationality: 'الجنسية',
        passportNumber: 'رقم جواز السفر',
        passportIssueDateRange: 'تاريخ صدور جواز السفر',
        passportIssueDate: 'تاريخ صدور جواز السفر',
        email: 'البريد الإلكتروني',
        jobTitle: 'المسمى الوظيفي',
        dailyWorkingHoursRange: 'ساعات العمل اليومية',
        dailyWorkingHours: 'ساعات العمل اليومية',
        weeklyWorkingHoursRange: 'ساعات العمل الأسبوعية',
        weeklyWorkingHours: 'ساعات العمل الأسبوعية',
        weekEndDay: 'يوم الراحة',
        workStartDateRange: 'تاريخ بدء العمل',
        workStartDate: 'تاريخ بدء العمل',
        employeeName: 'اسم العامل',
        positionName: 'المسمى الوظيفي',
        basicSalaryRange: 'ألراتب الأساسي',
        basicSalary: 'ألراتب الأساسي',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {},
      placeholders: {
        companyRepresentative: 'ممثل الشركة في العقد',
        secondParty: 'الطرف الثاني من العقد',
        nationality: 'الجنسية',
        passportNumber: 'رقم جواز السفر',
        email: 'البريد الإلكتروني',
        jobTitle: 'المسمى الوظيفي',
        dailyWorkingHours:
          'عدد ساعات العمل الفعلية اليومية',
        weeklyWorkingHours:
          'عدد ساعات العمل الفعلية بالأسبوع',
        weekEndDay: 'يوم الراحة',
        employeeName: 'اسم العامل/المتعاقد معه',
        positionName: 'المسمى الوظيفي',
        basicSalary: 'الراتب الأساسي',
      },
      hints: {},
      new: {
        title: 'New Employment Contract ',
      },
      view: {
        title: 'View Employment Contract ',
      },
      importer: {
        title: 'Import Employment Contract',
        fileName: 'employmentContract_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    connectionLevel: {
      name: 'connectionLevel',
      label: 'ConnectionLevels',
      menu: 'ConnectionLevels',
      exporterFileName: 'connectionLevel_export',
      list: {
        menu: 'ConnectionLevels',
        title: 'ConnectionLevels',
      },
      create: {
        success: 'Connection Level successfully saved',
      },
      update: {
        success: 'Connection Level successfully saved',
      },
      destroy: {
        success: 'Connection Level successfully deleted',
      },
      destroyAll: {
        success: 'Connection Level(s) successfully deleted',
      },
      edit: {
        title: 'Edit Connection Level',
      },
      fields: {
        id: 'Id',
        external: 'الخارجي',
        internal: 'الداخلي',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {},
      placeholders: {
        external: 'حدد Connection Level بكلمة',
        internal: 'حدد Connection Level بكلمة',
      },
      hints: {},
      new: {
        title: 'New Connection Level',
      },
      view: {
        title: 'View Connection Level',
      },
      importer: {
        title: 'Import ConnectionLevels',
        fileName: 'connectionLevel_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    commonComitees: {
      name: 'commonComitees',
      label: 'CommonComitees',
      menu: 'CommonComitees',
      exporterFileName: 'commonComitees_export',
      list: {
        menu: 'CommonComitees',
        title: 'CommonComitees',
      },
      create: {
        success: 'اللجان المشتركة successfully saved',
      },
      update: {
        success: 'اللجان المشتركة successfully saved',
      },
      destroy: {
        success: 'اللجان المشتركة successfully deleted',
      },
      destroyAll: {
        success: 'اللجان المشتركة(s) successfully deleted',
      },
      edit: {
        title: 'Edit اللجان المشتركة',
      },
      fields: {
        id: 'Id',
        addedCommittee: 'اللجان المضافة',
        menus: 'Menus',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        menus: {
          'لجنة المبايعات': 'لجنة المبايعات',
          'لجنة المسافرات': 'لجنة المسافرات',
          'لجنة المصالحات': 'لجنة المصالحات',
          'لجنة اللجان': 'لجنة اللجان',
        },
      },
      placeholders: {
        addedCommittee: 'أضف اسم اللجنة هنا',
      },
      hints: {},
      new: {
        title: 'New اللجان المشتركة',
      },
      view: {
        title: 'View اللجان المشتركة',
      },
      importer: {
        title: 'Import CommonComitees',
        fileName: 'commonComitees_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    jobRequirments: {
      name: 'jobRequirments',
      label: 'JobRequirments',
      menu: 'JobRequirments',
      exporterFileName: 'jobRequirments_export',
      list: {
        menu: 'JobRequirments',
        title: 'JobRequirments',
      },
      create: {
        success: 'متطلبات الوظيفة successfully saved',
      },
      update: {
        success: 'متطلبات الوظيفة successfully saved',
      },
      destroy: {
        success: 'متطلبات الوظيفة successfully deleted',
      },
      destroyAll: {
        success: 'متطلبات الوظيفة(s) successfully deleted',
      },
      edit: {
        title: 'Edit متطلبات الوظيفة',
      },
      fields: {
        id: 'Id',
        tactLevel: 'مستوى اللباقة',
        experienceYearsRange: 'سنوات الخبرة',
        experienceYears: 'سنوات الخبرة',
        minKPI: 'الحد الأدنى لمعايير الأداء المتوقع',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'New متطلبات الوظيفة',
      },
      view: {
        title: 'View متطلبات الوظيفة',
      },
      importer: {
        title: 'Import JobRequirments',
        fileName: 'jobRequirments_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    jobPath: {
      name: 'jobPath',
      label: 'JobPaths',
      menu: 'JobPaths',
      exporterFileName: 'jobPath_export',
      list: {
        menu: 'JobPaths',
        title: 'JobPaths',
      },
      create: {
        success: 'المسار الوظيفي successfully saved',
      },
      update: {
        success: 'المسار الوظيفي successfully saved',
      },
      destroy: {
        success: 'المسار الوظيفي successfully deleted',
      },
      destroyAll: {
        success: 'المسار الوظيفي(s) successfully deleted',
      },
      edit: {
        title: 'Edit المسار الوظيفي',
      },
      fields: {
        id: 'Id',
        jobName: 'الوظيفة',
        promotionIndicators: 'مؤشرات الترقي',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'New المسار الوظيفي',
      },
      view: {
        title: 'View المسار الوظيفي',
      },
      importer: {
        title: 'Import JobPaths',
        fileName: 'jobPath_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    tasksDuties: {
      name: 'tasksDuties',
      label: 'TasksDuties',
      menu: 'TasksDuties',
      exporterFileName: 'tasksDuties_export',
      list: {
        menu: 'TasksDuties',
        title: 'TasksDuties',
      },
      create: {
        success: 'TasksDuties successfully saved',
      },
      update: {
        success: 'TasksDuties successfully saved',
      },
      destroy: {
        success: 'TasksDuties successfully deleted',
      },
      destroyAll: {
        success: 'TasksDuties(s) successfully deleted',
      },
      edit: {
        title: 'Edit TasksDuties',
      },
      fields: {
        id: 'Id',
        tasksDuties: 'المهام و الواجبات',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'New TasksDuties',
      },
      view: {
        title: 'View TasksDuties',
      },
      importer: {
        title: 'Import TasksDuties',
        fileName: 'tasksDuties_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    administrativeFinancialPowers: {
      name: 'administrativeFinancialPowers',
      label: 'AdministrativeFinancialPowers',
      menu: 'AdministrativeFinancialPowers',
      exporterFileName:
        'administrativeFinancialPowers_export',
      list: {
        menu: 'AdministrativeFinancialPowers',
        title: 'AdministrativeFinancialPowers',
      },
      create: {
        success:
          'الصلاحيات الإدارية و المالية successfully saved',
      },
      update: {
        success:
          'الصلاحيات الإدارية و المالية successfully saved',
      },
      destroy: {
        success:
          'الصلاحيات الإدارية و المالية successfully deleted',
      },
      destroyAll: {
        success:
          'الصلاحيات الإدارية و المالية(s) successfully deleted',
      },
      edit: {
        title: 'Edit الصلاحيات الإدارية و المالية',
      },
      fields: {
        id: 'Id',
        administrativeFinancialPowers:
          'الصلاحيات الإدارية و المالية',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'New الصلاحيات الإدارية و المالية',
      },
      view: {
        title: 'View الصلاحيات الإدارية و المالية',
      },
      importer: {
        title: 'Import AdministrativeFinancialPowers',
        fileName:
          'administrativeFinancialPowers_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    cardInformation: {
      name: 'cardInformation',
      label: 'CardInformations',
      menu: 'CardInformations',
      exporterFileName: 'cardInformation_export',
      list: {
        menu: 'CardInformations',
        title: 'CardInformations',
      },
      create: {
        success: 'بيانات البطاقة successfully saved',
      },
      update: {
        success: 'بيانات البطاقة successfully saved',
      },
      destroy: {
        success: 'بيانات البطاقة successfully deleted',
      },
      destroyAll: {
        success: 'بيانات البطاقة(s) successfully deleted',
      },
      edit: {
        title: 'Edit بيانات البطاقة',
      },
      fields: {
        id: 'Id',
        version: 'الإصدار',
        dateRange: 'التاريخ',
        date: 'التاريخ',
        generalManager: 'المدير العام',
        hRManager: 'مدير الموارد البشرية',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'New بيانات البطاقة',
      },
      view: {
        title: 'View بيانات البطاقة',
      },
      importer: {
        title: 'Import CardInformations',
        fileName: 'cardInformation_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    tellProblem: {
      name: 'tellProblem',
      label: 'TellProblems',
      menu: 'TellProblems',
      exporterFileName: 'tellProblem_export',
      list: {
        menu: 'TellProblems',
        title: 'TellProblems',
      },
      create: {
        success: 'الإبلاغ عن مشكلة successfully saved',
      },
      update: {
        success: 'الإبلاغ عن مشكلة successfully saved',
      },
      destroy: {
        success: 'الإبلاغ عن مشكلة successfully deleted',
      },
      destroyAll: {
        success: 'الإبلاغ عن مشكلة(s) successfully deleted',
      },
      edit: {
        title: 'Edit الإبلاغ عن مشكلة',
      },
      fields: {
        id: 'Id',
        problemDescription: 'شرح محتوى المشكلة',
        problemDateRange: 'تاريخ الحدوث',
        problemDate: 'تاريخ الحدوث',
        problemCauses: 'الأسباب المحتملة',
        problemSolutions: 'الحلول المقترحة',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {},
      placeholders: {
        problemDescription: 'شرح المشكلة هنا',
        problemCauses: 'الأسباب المحتملة',
        problemSolutions: 'الحلول المقترحة',
      },
      hints: {},
      new: {
        title: 'New الإبلاغ عن مشكلة',
      },
      view: {
        title: 'View الإبلاغ عن مشكلة',
      },
      importer: {
        title: 'Import TellProblems',
        fileName: 'tellProblem_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    departments: {
      name: 'departments',
      label: 'Departments',
      menu: 'Departments',
      exporterFileName: 'departments_export',
      list: {
        menu: 'Departments',
        title: 'Departments',
      },
      create: {
        success: 'الأقسام successfully saved',
      },
      update: {
        success: 'الأقسام successfully saved',
      },
      destroy: {
        success: 'الأقسام successfully deleted',
      },
      destroyAll: {
        success: 'الأقسام(s) successfully deleted',
      },
      edit: {
        title: 'Edit الأقسام',
      },
      fields: {
        id: 'Id',
        departments: 'ألأقسام',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {},
      placeholders: {
        departments: 'القسم',
      },
      hints: {},
      new: {
        title: 'New الأقسام',
      },
      view: {
        title: 'View الأقسام',
      },
      importer: {
        title: 'Import Departments',
        fileName: 'departments_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },
  },

  auth: {
    tenants: 'Workspaces',
    profile: {
      title: 'Profile',
      success: 'Profile successfully updated',
    },
    createAnAccount: 'Create an account',
    rememberMe: 'Remember me',
    forgotPassword: 'Forgot password',
    signin: 'Sign in',
    signup: 'Sign up',
    signout: 'Sign out',
    alreadyHaveAnAccount:
      'Already have an account? Sign in.',
    social: {
      errors: {
        'auth-invalid-provider':
          'This email is already registered to another provider.',
        'auth-no-email': `The email associated with this account is private or inexistent.`,
      },
    },
    signinWithAnotherAccount:
      'Sign in with another account',
    emailUnverified: {
      message: `Please confirm your email at <strong>{0}</strong> to continue.`,
      submit: `Resend email verification`,
    },
    emptyPermissions: {
      message: `You have no permissions yet. Wait for the admin to grant you privileges.`,
    },
    passwordResetEmail: {
      message: 'Send password reset email',
      error: `Email not recognized`,
    },
    passwordReset: {
      message: 'Reset password',
    },
    passwordChange: {
      title: 'Change Password',
      success: 'Password successfully changed',
      mustMatch: 'Passwords must match',
    },
    emailAddressVerificationEmail: {
      error: `Email not recognized`,
    },
    verificationEmailSuccess: `Verification email successfully sent`,
    passwordResetEmailSuccess: `Password reset email successfully sent`,
    passwordResetSuccess: `Password successfully changed`,
    verifyEmail: {
      success: 'Email successfully verified.',
      message:
        'Just a moment, your email is being verified...',
    },
  },

  roles: {
    admin: {
      label: 'Admin',
      description: 'Full access to all resources',
    },
    manager: {
      label: 'Manager',
      description: 'Company Manager Roles',
    },
    candidate: {
      label: 'Candidate',
      description: 'Person who wants for job apply',
    },
    employee: {
      label: 'Employee',
      description: 'Company Employee Roles.',
    },
  },

  user: {
    fields: {
      id: 'Id',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Name',
      firstName: 'First Name',
      lastName: 'Last Name',
      status: 'Status',
      phoneNumber: 'Phone Number',
      role: 'Role',
      createdAt: 'Created at',
      updatedAt: 'Updated at',
      roleUser: 'Role/User',
      roles: 'Roles',
      createdAtRange: 'Created at',
      password: 'Password',
      oldPassword: 'Old Password',
      newPassword: 'New Password',
      newPasswordConfirmation: 'New Password Confirmation',
      rememberMe: 'Remember me',
    },
    status: {
      active: 'Active',
      invited: 'Invited',
      'empty-permissions': 'Waiting for Permissions',
    },
    invite: 'Invite',
    validations: {
      // eslint-disable-next-line
      email: 'Email ${value} is invalid',
    },
    title: 'Users',
    menu: 'Users',
    doAddSuccess: 'User(s) successfully saved',
    doUpdateSuccess: 'User successfully saved',
    exporterFileName: 'users_export',
    doDestroySuccess: 'User successfully deleted',
    doDestroyAllSuccess: 'Users successfully deleted',
    edit: {
      title: 'Edit User',
    },
    new: {
      title: 'Invite User(s)',
      titleModal: 'Invite User',
      emailsHint:
        'Separate multiple email addresses using the comma character.',
    },
    view: {
      title: 'View User',
      activity: 'Activity',
    },
    importer: {
      title: 'Import Users',
      fileName: 'users_import_template',
      hint: 'Files/Images columns must be the URLs of the files separated by space. Relationships must be the ID of the referenced records separated by space. Roles must be the role ids separated by space.',
    },
    errors: {
      userAlreadyExists:
        'User with this email already exists',
      userNotFound: 'User not found',
      revokingOwnPermission: `You can't revoke your own admin permission`,
    },
  },

  tenant: {
    name: 'tenant',
    label: 'Workspaces',
    menu: 'Workspaces',
    list: {
      menu: 'Workspaces',
      title: 'Workspaces',
    },
    create: {
      button: 'Create Workspace',
      success: 'Workspace successfully saved',
    },
    update: {
      success: 'Workspace successfully saved',
    },
    destroy: {
      success: 'Workspace successfully deleted',
    },
    destroyAll: {
      success: 'Workspace(s) successfully deleted',
    },
    edit: {
      title: 'Edit Workspace',
    },
    fields: {
      id: 'Id',
      name: 'Name',
      url: 'URL',
      tenantUrl: 'Workspace URL',
      tenantName: 'Workspace Name',
      tenantId: 'Workspace',
      plan: 'Plan',
    },
    enumerators: {},
    new: {
      title: 'New Workspace',
    },
    invitation: {
      view: 'View Invitations',
      invited: 'Invited',
      accept: 'Accept Invitation',
      decline: 'Decline Invitation',
      declined: 'Invitation successfully declined',
      acceptWrongEmail: 'Accept Invitation With This Email',
    },
    select: 'Select Workspace',
    validation: {
      url: 'Your workspace URL can only contain lowercase letters, numbers and dashes (and must start with a letter or number).',
    },
  },

  plan: {
    menu: 'Plans',
    title: 'Plans',

    free: {
      label: 'Free',
      price: '$0',
    },
    growth: {
      label: 'Growth',
      price: '$10',
    },
    enterprise: {
      label: 'Enterprise',
      price: '$50',
    },

    pricingPeriod: '/month',
    current: 'Current Plan',
    subscribe: 'Subscribe',
    manage: 'Manage Subscription',
    cancelAtPeriodEnd:
      'This plan will be canceled at the end of the period.',
    somethingWrong:
      'There is something wrong with your subscription. Please go to manage subscription for more details.',
    notPlanUser: `You are not the manager of this subscription.`,
  },

  auditLog: {
    menu: 'Audit Logs',
    title: 'Audit Logs',
    exporterFileName: 'audit_log_export',
    entityNamesHint:
      'Separate multiple entities using the comma character.',
    fields: {
      id: 'Id',
      timestampRange: 'Period',
      entityName: 'Entity',
      entityNames: 'Entities',
      entityId: 'Entity ID',
      action: 'Action',
      values: 'Values',
      timestamp: 'Date',
      createdByEmail: 'User Email',
    },
  },
  settings: {
    title: 'Settings',
    menu: 'Settings',
    save: {
      success:
        'Settings successfully saved. The page will reload in {0} seconds for changes to take effect.',
    },
    fields: {
      theme: 'Theme',
      primaryColor: 'Primary Color',
      secondaryColor: 'Secondary Color',
      logos: 'Logo',
      backgroundImages: 'Background Image',
    },
    colors: {
      default: 'Default',
      amber: 'Amber',
      blue: 'Blue',
      cyan: 'Cyan',
      deep_orange: 'Deep Orange',
      deep_purple: 'Deep Purple',
      green: 'Green',
      indigo: 'Indigo',
      light_blue: 'Light Blue',
      light_green: 'Light Green',
      lime: 'Lime',
      orange: 'Orange',
      pink: 'Pink',
      purple: 'Purple',
      red: 'Red',
      teal: 'Teal',
      yellow: 'Yellow',
      grey: 'Grey',
      blue_grey: 'Blue Grey',
      brown: 'Brown',
    },
  },
  dashboard: {
    menu: 'Dashboard',
    message: `This page uses fake data for demonstration purposes only. You can edit it at frontend/src/app/dashboard/components/dashboard.component.html.`,
    charts: {
      day: 'Day',
      red: 'Red',
      green: 'Green',
      yellow: 'Yellow',
      grey: 'Grey',
      blue: 'Blue',
      orange: 'Orange',
      months: {
        1: 'January',
        2: 'February',
        3: 'March',
        4: 'April',
        5: 'May',
        6: 'June',
        7: 'July',
      },
      eating: 'Eating',
      drinking: 'Drinking',
      sleeping: 'Sleeping',
      designing: 'Designing',
      coding: 'Coding',
      cycling: 'Cycling',
      running: 'Running',
      customer: 'Customer',
    },
  },
  errors: {
    backToHome: 'Back to home',
    403: `Sorry, you don't have access to this page`,
    404: 'Sorry, the page you visited does not exist',
    500: 'Sorry, the server is reporting an error',
    429: 'Too many requests. Please try again later.',
    forbidden: {
      message: 'Forbidden',
    },
    validation: {
      message: 'An error occurred',
    },
    defaultErrorMessage: 'Ops, an error occurred',
  },

  preview: {
    error:
      'Sorry, this operation is not allowed in preview mode.',
  },

  // See https://github.com/jquense/yup#using-a-custom-locale-dictionary
  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} is invalid',
      required: '${path} is required',
      oneOf:
        '${path} must be one of the following values: ${values}',
      notOneOf:
        '${path} must not be one of the following values: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} must be a ${type}`;
      },
    },
    string: {
      length:
        '${path} must be exactly ${length} characters',
      min: '${path} must be at least ${min} characters',
      max: '${path} must be at most ${max} characters',
      matches:
        '${path} must match the following: "${regex}"',
      email: '${path} must be a valid email',
      url: '${path} must be a valid URL',
      trim: '${path} must be a trimmed string',
      lowercase: '${path} must be a lowercase string',
      uppercase: '${path} must be a upper case string',
      selected: '${path} must be selected',
    },
    number: {
      min: '${path} must be greater than or equal to ${min}',
      max: '${path} must be less than or equal to ${max}',
      lessThan: '${path} must be less than ${less}',
      moreThan: '${path} must be greater than ${more}',
      notEqual: '${path} must be not equal to ${notEqual}',
      positive: '${path} must be a positive number',
      negative: '${path} must be a negative number',
      integer: '${path} must be an integer',
      type: '${path} must be a number',
    },
    date: {
      min: '${path} field must be later than ${min}',
      max: '${path} field must be at earlier than ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        '${path} field cannot have keys not specified in the object shape',
    },
    array: {
      min: '${path} field must have at least ${min} items',
      max: '${path} field must have less than or equal to ${max} items',
    },
  },
  /* eslint-disable */
  fileUploader: {
    upload: 'Upload',
    image: 'You must upload an image',
    size: 'File is too big. Max allowed size is {0}',
    formats: `Invalid format. Must be one of: {0}.`,
  },
  importer: {
    line: 'Line',
    status: 'Status',
    pending: 'Pending',
    imported: 'Imported',
    error: 'Error',
    total: `Status: {0} imported, {1} pending and {2} with error`,
    importedMessage: `Processed {0} of {1}.`,
    noNavigateAwayMessage:
      'Do not navigate away from this page or import will be stopped.',
    completed: {
      success:
        'Import completed. All rows were successfully imported.',
      someErrors:
        'Processing completed, but some rows were unable to be imported.',
      allErrors: 'Import failed. There are no valid rows.',
    },
    form: {
      downloadTemplate: 'Download the template',
      hint: 'Click or drag the file to this area to continue',
    },
    list: {
      discardConfirm:
        'Are you sure? Non-imported data will be lost.',
    },
    errors: {
      invalidFileEmpty: 'The file is empty',
      invalidFileExcel:
        'Only excel (.xlsx) files are allowed',
      invalidFileUpload:
        'Invalid file. Make sure you are using the last version of the template.',
      importHashRequired: 'Import hash is required',
      importHashExistent: 'Data has already been imported',
    },
  },

  paginator: {
    itemsPerPageLabel: 'Items per page:',
    nextPageLabel: 'Next page',
    previousPageLabel: 'Previous page',
    firstPageLabel: 'First page',
    lastPageLabel: 'Last page',
    getRangeLabel: {
      zero: '0 of {0}',
      interval: '{0} - {1} of {2}',
    },
  },

  datetime: {
    upSecondLabel: 'Add a second',
    downSecondLabel: 'Minus a second',
    upMinuteLabel: 'Add a minute',
    downMinuteLabel: 'Minus a minute',
    upHourLabel: 'Add a hour',
    downHourLabel: 'Minus a hour',
    prevMonthLabel: 'Previous month',
    nextMonthLabel: 'Next month',
    prevYearLabel: 'Previous year',
    nextYearLabel: 'Next year',
    prevMultiYearLabel: 'Previous 21 years',
    nextMultiYearLabel: 'Next 21 years',
    switchToMonthViewLabel: 'Change to month view',
    switchToMultiYearViewLabel: 'Choose month and year',
    cancelBtnLabel: 'Cancel',
    setBtnLabel: 'Set',
    rangeFromLabel: 'From',
    rangeToLabel: 'To',
    hour12AMLabel: 'AM',
    hour12PMLabel: 'PM',
  },

  table: {
    noData: 'No data',
    loading: 'Loading...',
  },

  autocomplete: {
    loading: 'Loading...',
  },

  imagesViewer: {
    noImage: 'No image',
  },
};

export default en;
