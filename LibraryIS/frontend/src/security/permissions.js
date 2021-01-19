import Roles from '@/security/roles';
const roles = Roles.values;

class Permissions {
  static get values() {
    return {
      iamEdit: {
        id: 'iamEdit',
        allowedRoles: [
          roles.admin,

        ],
        allowedStorageFolders: ['user'],
      },
      iamCreate: {
        id: 'iamCreate',
        allowedRoles: [
          roles.admin,

        ],
      },
      iamImport: {
        id: 'iamImport',
        allowedRoles: [
          roles.admin,

        ],
      },
      iamRead: {
        id: 'iamRead',
        allowedRoles: [
          roles.admin,

        ],
      },
      iamUserAutocomplete: {
        id: 'iamUserAutocomplete',
        allowedRoles: [
          roles.admin,



        ],
      },
      auditLogRead: {
        id: 'auditLogRead',
        allowedRoles: [roles.admin],
      },
      settingsEdit: {
        id: 'settingsEdit',
        allowedRoles: [roles.admin],
      },
      loanImport: {
        id: 'loanImport',
        allowedRoles: [
          roles.admin,

        ],
      },
      loanCreate: {
        id: 'loanCreate',
        allowedRoles: [
          roles.admin,

        ],
        allowedStorageFolders: ['loan'],
      },
      loanEdit: {
        id: 'loanEdit',
        allowedRoles: [
          roles.admin,

        ],
        allowedStorageFolders: ['loan'],
      },
      loanDestroy: {
        id: 'loanDestroy',
        allowedRoles: [
          roles.admin,

        ],
        allowedStorageFolders: ['loan'],
      },
      loanRead: {
        id: 'loanRead',
        allowedRoles: [roles.admin, roles.users

        ],
      },
      loanAutocomplete: {
        id: 'loanAutocomplete',
        allowedRoles: [
          roles.admin,roles.users


        ],
      },

      bookImport: {
        id: 'bookImport',
        allowedRoles: [
          roles.admin,

        ],
      },
      bookCreate: {
        id: 'bookCreate',
        allowedRoles: [
          roles.admin,

        ],
        allowedStorageFolders: ['book'],
      },
      bookEdit: {
        id: 'bookEdit',
        allowedRoles: [
          roles.admin,

        ],
        allowedStorageFolders: ['book'],
      },
      bookDestroy: {
        id: 'bookDestroy',
        allowedRoles: [
          roles.admin,

        ],
        allowedStorageFolders: ['book'],
      },
      bookRead: {
        id: 'bookRead',
        allowedRoles: [
          roles.admin,roles.users

        ],
      },
      bookAutocomplete: {
        id: 'bookAutocomplete',
        allowedRoles: [
          roles.admin,

        ],
      },
    };
  }

  static get asArray() {
    return Object.keys(this.values).map((value) => {
      return this.values[value];
    });
  }
}

export default Permissions;
