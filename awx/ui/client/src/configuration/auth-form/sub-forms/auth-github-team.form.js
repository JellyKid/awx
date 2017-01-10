/*************************************************
 * Copyright (c) 2016 Ansible, Inc.
 *
 * All Rights Reserved
 *************************************************/

export default ['i18n', function(i18n) {
    return {
        name: 'configuration_github_team_template',
        showActions: true,
        showHeader: false,

        fields: {
            SOCIAL_AUTH_GITHUB_TEAM_KEY: {
                type: 'text',
                reset: 'SOCIAL_AUTH_GITHUB_TEAM_KEY'
            },
            SOCIAL_AUTH_GITHUB_TEAM_SECRET: {
                type: 'sensitive',
                hasShowInputButton: true,
                reset: 'SOCIAL_AUTH_GITHUB_TEAM_SECRET'
            },
            SOCIAL_AUTH_GITHUB_TEAM_ID: {
                type: 'text',
                reset: 'SOCIAL_AUTH_GITHUB_TEAM_ID'
            }
        },

        buttons: {
            reset: {
                ngClick: 'vm.resetAllConfirm()',
                label: i18n._('Reset All'),
                class: 'Form-button--left Form-cancelButton'
            },
            cancel: {
                ngClick: 'vm.formCancel()',
            },
            save: {
                ngClick: 'vm.formSave()',
                ngDisabled: true
            }
        }
    };
}
];
