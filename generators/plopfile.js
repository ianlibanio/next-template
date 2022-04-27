module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'Creates a component.',

    prompts: [
      {
        type: 'input',
        name: 'name',
        message: "What's the name of the component you want to create?",
      },
    ],

    actions: [
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/index.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/test.tsx',
        templateFile: 'templates/test.tsx.hbs',
      },
    ],
  });
};
