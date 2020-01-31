var shell = require('shelljs');
let feature = process.argv[2] // feature name
let target = process.argv[3];


folder()

function folder() {
    shell.cd(target); // go to the target
    shell.mkdir(feature);
    shell.cd(feature);
    
    // Actions
    
    shell.mkdir('Actions');
    shell.cd('Actions');
    shell.touch(feature + 'API.ts');
    shell.touch(feature + 'Def.ts');
    shell.touch(feature + 'Gen.ts');
    shell.cd('..');
    
    // Component
    
    shell.mkdir('Components');
    shell.cd('Components');
    shell.touch(feature + '.tsx');
    shell.cd('..');
    
    // Container
    
    shell.mkdir('Container');
    shell.cd('Container');
    shell.touch(feature + 'Con.ts');
    shell.cd('..');
    
    // Reducer
    
    shell.mkdir('Reducer');
    shell.cd('Reducer');
    shell.touch(feature + 'Red.ts');
    shell.cd('..');
    
    // Saga
    
    shell.mkdir('Saga');
    shell.cd('Saga');
    shell.touch(feature + 'Saga.ts');
    shell.cd('..');
    
    
    // State
    
    shell.mkdir('State');
    shell.cd('State');
    shell.touch(feature + 'State.ts');
    shell.cd('..');

    shell.echo('Files for  ' + feature + ' created')

}


