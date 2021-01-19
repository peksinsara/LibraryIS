const Roles = require('./roles');
const roles = Roles.values;

class Permissions {
  static get values() {
    return {
      iamEdit: {
        id: 'iamEdit',
        allowedRoles: [
          roles.admin,
          roles.iamSecurityReviewer,
          roles.editor,
        ],
        allowedStorageFolders: ['user'],
      },
      iamCreate: {
        id: 'iamCreate',
        allowedRoles: [
          roles.admin,
          roles.iamSecurityReviewer,
          roles.editor,
        ],
      },
      iamImport: {
        id: 'iamImport',
        allowedRoles: [
          roles.admin,
          roles.iamSecurityReviewer,
          roles.editor,
        ],
      },
      iamRead: {
        id: 'iamRead',
        allowedRoles: [
          roles.admin,
          roles.iamSecurityReviewer,
          roles.editor,
          roles.viewer,
        ],
      },
      iamUserAutocomplete: {
        id: 'iamUserAutocomplete',
        allowedRoles: [
          roles.admin,
          roles.editor,
          roles.viewer,

          roles.loanEditor,
          roles.loanViewer,
        ],
      },
      auditLogRead: {
        id: 'auditLogRead',
        allowedRoles: [roles.admin, roles.auditLogViewer, roles.viewer],
      },
      settingsEdit: {
        id: 'settingsEdit',
        allowedRoles: [roles.admin],
      },
      loanImport: {
        id: 'loanImport',
        allowedRoles: [
          roles.admin,
          roles.editor,
          roles.entityEditor,
          roles.loanEditor,
        ],
      },
      loanCreate: {
        id: 'loanCreate',
        allowedRoles: [
          roles.admin,
          roles.editor,
          roles.entityEditor,
          roles.loanEditor,
        ],
        allowedStorageFolders: ['loan'],
      },
      loanEdit: {
        id: 'loanEdit',
        allowedRoles: [
          roles.admin,
          roles.editor,
          roles.entityEditor,
          roles.loanEditor,
        ],
        allowedStorageFolders: ['loan'],
      },
      loanDestroy: {
        id: 'loanDestroy',
        allowedRoles: [
          roles.admin,
          roles.editor,
          roles.entityEditor,
          roles.loanEditor,
        ],
        allowedStorageFolders: ['loan'],
      },
      loanRead: {
        id: 'loanRead',
        allowedRoles: [
          roles.admin,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.loanEditor,
          roles.loanViewer,
        ],
      },
      loanAutocomplete: {
        id: 'loanAutocomplete',
        allowedRoles: [
          roles.admin,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.loanEditor,
          roles.loanViewer,

        ],
      },

      bookImport: {
        id: 'bookImport',
        allowedRoles: [
          roles.admin,
          roles.editor,
          roles.entityEditor,
          roles.bookEditor,
        ],
      },
      bookCreate: {
        id: 'bookCreate',
        allowedRoles: [
          roles.admin,
          roles.editor,
          roles.entityEditor,
          roles.bookEditor,
        ],
        allowedStorageFolders: ['book'],
      },
      bookEdit: {
        id: 'bookEdit',
        allowedRoles: [
          roles.admin,
          roles.editor,
          roles.entityEditor,
          roles.bookEditor,
        ],
        allowedStorageFolders: ['book'],
      },
      bookDestroy: {
        id: 'bookDestroy',
        allowedRoles: [
          roles.admin,
          roles.editor,
          roles.entityEditor,
          roles.bookEditor,
        ],
        allowedStorageFolders: ['book'],
      },
      bookRead: {
        id: 'bookRead',
        allowedRoles: [
          roles.admin,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.bookEditor,
          roles.bookViewer,
        ],
      },
      bookAutocomplete: {
        id: 'bookAutocomplete',
        allowedRoles: [
          roles.admin,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.bookEditor,
          roles.bookViewer,
          roles.loanEditor,
          roles.loanViewer,
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

module.exports = Permissions;
