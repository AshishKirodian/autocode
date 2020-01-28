var shell = require('shelljs');
let action = process.argv[2] // ${capAction} name
let file = process.argv[3];
let type = process.argv[4];
let capAction = action.toUpperCase();

switch (type) {
    case 'constant': {
        constant()
        break;
    }
    case 'interface': {
        interface()
        break;
    }
}

function constant() {
    let conString = `
    export const ${capAction} = '${capAction}';
    export type ${capAction} = typeof ${capAction};
    export const ${capAction}_SUCCESS = '${capAction}_SUCCESS';
    export type ${capAction}_SUCCESS = typeof ${capAction}_SUCCESS;
    export const ${capAction}_FAILURE = '${capAction}_FAILURE';
    export type ${capAction}_FAILURE = typeof ${capAction}_FAILURE;
    
    `
    shell.echo(conString).toEnd(file) 
    shell.echo('Constants for  ' + action + ' created')

}

function interface() {
    let intString = `
    export interface ${action} {
        type: ${capAction};
        payload: {
        };
    }
    
    export interface ${action}Success {
        type: ${capAction}_SUCCESS;
        payload: {
        };
    }
    
    export interface ${action}Failure {
        type: ${capAction}_FAILURE;
    }
    `    
    shell.echo(intString).toEnd(file) 
    shell.echo('Interface for  ' + action + ' created')

}

