var shell = require('shelljs');
let action = process.argv[2] // ${capAction} name
let file = process.argv[3];
let capAction = action.toUpperCase();

generator()
function generator() {
    let genString = `
    public static ${action}(): ${action} {
        return {
            type: ${capAction},
            payload: {
                clusterOn: clusterOn,
                clusterType: clusterType
            }
        };
    }
    public static ${action}Success(clusterContent: CardState[], cardConfig: CardConfig): ${action}Success {
        return {
            type: ${capAction}_SUCCESS,
            payload: {
                clusterContent: clusterContent,
                cardConfig: cardConfig
            }
        };
    }
    public static ${action}Failure(): ${action}Failure {
        return {
            type: ${capAction}_FAILURE
        };
    }
    `
    shell.echo(genString).toEnd(file) 
    shell.echo('Action generator for ' + action + ' succesfull')
}

