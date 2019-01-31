import React from 'react';
import renderer from 'react-test-renderer';
import { BpButton } from '../';

test('Link changes the class when hovered', () => {
    const component = renderer.create(<BpButton>Button</BpButton>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
