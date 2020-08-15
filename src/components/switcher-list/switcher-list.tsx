import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'switcher-list',
  styleUrl: 'switcher-list.scss',
  shadow: true,
})
export class SwitcherList implements ComponentInterface {

  render() {
    return (
      <div>
        Test
      </div>
    );
  }

}
