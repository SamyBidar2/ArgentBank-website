import { FeatureItem } from '../../Components/FeatureItem';
import './index.css';
import Banner from '../../../../designs/img/bank-tree.webp';
import Chat from '../../../../designs/img/icon-chat.webp';
import Money from '../../../../designs/img/icon-money.webp';
import Security from '../../../../designs/img/icon-security.webp';

export const Home = () => {
    return (
        <main>
        <div className="hero" style={{backgroundImage: `url(${Banner})`}}>
          <section className="hero-content">
            <h2 className="sr-only">Promoted Content</h2>
            <p className="subtitle">No fees.</p>
            <p className="subtitle">No minimum deposit.</p>
            <p className="subtitle">High interest rates.</p>
            <p className="text">Open a savings account with Argent Bank today!</p>
          </section>
        </div>
        <section className="features">
          <h2 className="sr-only">Features</h2>
            <FeatureItem logo= {Chat}/>
            <FeatureItem logo= {Money}/>
            <FeatureItem logo= {Security}/>
        </section>
      </main>
    )
  }
  