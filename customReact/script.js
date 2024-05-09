function customrender(customElement, mainContainer)
{
    /*
    const domElement = document.createElement(customElement.type);
    domElement.innerHTML = customElement.children;
    domElement.setAttribute('href',customElement.props.href);
    domElement.setAttribute('target',customElement.props.target)
    mainContainer.append(domElement);
    */

    const domElement = document.createElement(customElement.type);
    domElement.innerHTML = customElement.children;
    for (const key in customElement.props) {
        domElement.setAttribute(key,customElement.props[key]);
    }
    mainContainer.append(domElement);
}

const customElement = {
    type: 'a',
    props: {
        'href': 'https://www.google.com',
        'target': '_bkank'
    },
    children: 'Click to go on the google'
}

const mainContainer = document.querySelector('#root');

customrender(customElement, mainContainer);