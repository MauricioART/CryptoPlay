import { slide as Menu } from 'react-burger-menu';
import { Logo } from './logo';
import { Account } from './account';
import styles2 from './Header.module.scss';

type Props = {
  isAccountVisible: boolean;
};

const styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '36px'
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmItem: {
    display: 'inline-block',
    margin: '20px'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}


function Header() {
  return (
    <header> 
      <Menu styles={styles}>
      <a id="RPS" className="menu-item" href="/">Home</a>
        <a id="RPS" className="menu-item" href="/RPS">Rock, Paper, Scissors</a>
        <a id="coinFlip" className="menu-item" href="/coinToss">Coin Toss</a>
        <br/>
        <a id="slotMachine" className="menu-item" href="/slotMachines">Slot Machine</a>
      </Menu>
      <div className='logoContainer' style={{margin: "15px"}}>
        <Logo/>
      </div>
    </header>
  );
}

export { Header };
