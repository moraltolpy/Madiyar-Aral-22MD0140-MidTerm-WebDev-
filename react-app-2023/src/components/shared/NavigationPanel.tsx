import React from 'react';
import './styles/navigation.css'
import list from '../../services/handbook/shared/getNavigationList'
function NavigationPanel() {
  return (
    <nav>
        <div className="NavigationPanel">
            {list.map((item)=> (
                <span key={item.id}>
                <a href={item.link}>{item.name}</a>
              </span>
                ))}
        </div>
    </nav>
  );
}

export default NavigationPanel;
