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
            <FeatureItem 
              logo={Chat} 
              title="You are our #1 priority"
              text="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
            />
            <FeatureItem 
              logo= {Money}
              title="More savings means higher rates"
              text="The more you save with us, the higher your interest rate will be!"
            
            />
            <FeatureItem 
              logo= {Security}
              title="Security you can trust"
              text="We use top of the line encryption to make sure your data and money is always safe."
            />
        </section>
      </main>
    )
  }
  