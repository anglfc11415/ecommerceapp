import React, { Component } from 'react';
import { sections } from './directory.data';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends Component {
    constructor() {
        super()
        this.state = {
            sections,
        }
    }

    render () {
        console.log(this.state.sections);
        return (
            <div className='directory-menu'>
                {this.state.sections.map( ({id, ...otherSectionProps}) => {
                    return (
                        <MenuItem key={id}
                            {...otherSectionProps}
                        />)
                })}
            </div>
        );
    }
} 
export default Directory;