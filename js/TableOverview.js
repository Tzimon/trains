class TableOverview {
  constructor(element, color) {
    this.element = element;
    this.color = color;
  }

  loadElement(tables) {
    this.element.innerHTML = '';

    let i = 0;

    for (const tableName in tables) {
      this.element.appendChild(this.createTableElement(tableName, tables, i++));
    }
  }

  createTableElement(tableName, tables, i) {
    const color = (i * 360) / Object.keys(tables).length;
    const table = tables[tableName];

    const element = createElement('div', { class: 'table' });
    element.style.backgroundColor = `hsl(${color}, 35%, 90%)`;

    const titleElement = createElement('h3', { innerText: tableName });
    element.appendChild(titleElement);

    const listElement = createElement('ul');
    element.appendChild(listElement);

    Object.keys(table.columns).forEach((columnName) => {
      const listItemElement = createElement('li');
      listItemElement.appendChild(
        createElement('p', {
          innerText: `${columnName} (${table.columns[columnName]})`,
        })
      );
      listElement.appendChild(listItemElement);
    });

    const buttonElement = createElement('button', {
      class: 'button',
      innerText: 'Anzeigen',
    });
    element.appendChild(buttonElement);

    return element;
  }

  static createColumnElement(columnName, column) {
    return createElement('p', { innerText: `${columnName} (${column})` });
  }

  loadError() {
    this.element.innerHTML = '';

    this.element.appendChild(
      createElement('p', {
        class: 'error',
        innerText: 'Ladefehler',
      })
    );
  }
}
