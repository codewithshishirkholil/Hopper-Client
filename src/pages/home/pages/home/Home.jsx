
import { Bright_Meta } from 'bright_meta';
import SmallNav from './components/SmallNav';
import EarnDaily from './components/EarnDaily';
import Mining from './components/Maining/Maining';
const Home = () => {
      return (
            <section class="">
                  <Bright_Meta>
                        <title>Home Page</title>
                  </Bright_Meta>

                  <div>
                        <SmallNav />
                        <EarnDaily />
                        <Mining />
                  </div>


            </section>
      )

};

export default Home;
