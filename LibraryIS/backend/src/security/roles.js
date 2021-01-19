class Roles {
  static get values() {
    return {
      admin: 'admin',
      editor: 'editor',
      viewer: 'viewer',
      auditLogViewer: 'auditLogViewer',
      iamSecurityReviewer: 'iamSecurityReviewer',
      entityEditor: 'entityEditor',
      entityViewer: 'entityViewer',
      loanEditor: 'loanEditor',
      loanViewer: 'loanViewer',
      bookEditor: 'bookEditor',
      bookViewer: 'bookViewer',
    };
  }
}

module.exports = Roles;
