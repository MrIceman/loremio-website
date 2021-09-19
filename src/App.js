import { Layout, Menu, Space } from 'antd';
import './App.css';
import '../src/style/custom-antd.css';
import { useEffect, useRef, useState } from 'react';

const { Header, Content, Footer } = Layout

function App() {

  const [tab, setTab] = useState('0')
  const scrollRef = useRef(null)

  const [width, setWidth] = useState(window.innerWidth);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const executeScroll = () => scrollRef?.current.scrollIntoView({ behavior: "smooth" })

  const navigate = (e) => {
    setTab(e.key)
  }

  useEffect(() => {
    if (tab !== '0') {
      executeScroll()
      setTab('0')
    }
  }, [tab])

  const HolDieApp = () => {
    return (
      <div className="content__body__element">
        <div className="content__body__bomber">
          {width < 1024 && (
            <>
              <div>Lade <img style={{ height: '55px', paddingBottom: '10px' }} src="loremio.png" alt="logo" /> auf Android oder iOS runter.</div>

              <div className="links-container" style={{ marginTop: '30px' }}>
                <a href="https://play.google.com/store/apps/details?id=com.loremio.app">
                  <img className="content__body__download__play" src="play.png" alt="google" style={{ width: '200px', marginRight: '10px' }} />
                </a>
                <a href="https://apps.apple.com/de/app/loremio/id1582366441">
                  <img className="content__body__download__apple" src="app.png" alt="apple" style={{ width: '200px' }} />
                </a>
              </div>
            </>
          )}
          {width > 1023 && (
            <>
              <div style={{ maxWidth: '500px' }}>Lade <img style={{ height: '74px', paddingBottom: '15px' }} src="loremio.png" alt="logo" /> auf Android oder iOS runter.
                <div className="links-container" style={{ marginTop: '30px' }}>
                  <a href="https://play.google.com/store/apps/details?id=com.loremio.app">
                    <img className="content__body__download__play" src="play.png" alt="google" style={{ width: '245px', marginRight: '10px' }} />
                  </a>
                  <a href="https://apps.apple.com/de/app/loremio/id1582366441">
                    <img className="content__body__download__apple" src="app.png" alt="apple" style={{ width: '245px' }} />
                  </a>
                </div>
              </div>
              <div className="content__body__graphic">
                <img className="content__body__graphic__screenshot" src="scr1.png" alt="screenshot" />
                <img className="content__body__graphic__screenshot" src="scr2.png" alt="screenshot" />
              </div>
            </>
          )}
        </div>
      </div>

    );
  }

  const ShowÜber = () => {
    return (
      <div className="content__body__element">
        <div className="content__body__bomber">
          {width < 1024 && (
            <>
              <div>Get a <font style={{ color: '#2eb466', fontWeight: 'bold' }}>push,</font> save food.</div>
              <div className="content__body__bomber__additional-text">
                Unsere Vision ist es, dass in den Großstädten Deutschlands und irgendwann in ganz Deutschland kein Essen mehr verschwendet wird, egal ob Gastronomie, Supermarkt, oder Tante Emma Laden um die Ecke.
                Ziel von Uns ist es diese Unternehmen und Ihre Kundengruppen miteinander zu verbinden um Lebensmittel zu retten.
              </div>
              <div className="content__body__graphic">
                <img className="content__body__graphic__screenshot" src="scr1.png" alt="screenshot" />
                <img className="content__body__graphic__screenshot" src="scr2.png" alt="screenshot" />
              </div>
              <div className="links-container" style={{ marginTop: '30px' }}>
                <a href="https://play.google.com/store/apps/details?id=com.loremio.app">
                  <img className="content__body__download__play" src="play.png" alt="google" style={{ width: '200px', marginRight: '10px' }} />
                </a>
                <a href="https://apps.apple.com/de/app/loremio/id1582366441">
                  <img className="content__body__download__apple" src="app.png" alt="apple" style={{ width: '200px' }} />
                </a>
              </div>
            </>
          )}
          {width > 1023 && (
            <>
              <div style={{ marginRight: '25px' }}>Get a <font style={{ color: '#2eb466', fontWeight: 'bold' }}>push</font>, save food.
                <div className="content__body__bomber__additional-text">
                  Unsere Vision ist es, dass in den Großstädten Deutschlands und irgendwann in ganz Deutschland kein Essen mehr verschwendet wird, egal ob Gastronomie, Supermarkt, oder Tante Emma Laden um die Ecke.
                  Ziel von Uns ist es diese Unternehmen und Ihre Kundengruppen miteinander zu verbinden um Lebensmittel zu retten.
                </div>
                <div className="links-container" style={{ marginTop: '30px' }}>
                  <a href="https://play.google.com/store/apps/details?id=com.loremio.app">
                    <img className="content__body__download__play" src="play.png" alt="google" style={{ width: '245px', marginRight: '10px' }} />
                  </a>
                  <a href="https://apps.apple.com/de/app/loremio/id1582366441">
                    <img className="content__body__download__apple" src="app.png" alt="apple" style={{ width: '245px' }} />
                  </a>
                </div>
              </div>
              <div className="content__body__graphic">
                <img className="content__body__graphic__screenshot" src="scr1.png" alt="screenshot" />
                <img className="content__body__graphic__screenshot" src="scr2.png" alt="screenshot" />
              </div>
            </>
          )}
        </div>
      </div>
    );
  }

  const ShowFeatures = () => {
    return (
      <div className="content__body__element">
        <div className="content__body__features">
          <div className="content__body__features__element1 element">
            <div className="content__body__features__title title1">Sei ein Lebensmittelretter</div>
            <div className="content__body__features__detail block1">
              Erhalte von deinen Händlern mit den du dich gekoppelt hast stetig neue Lebensmittelangebote. Dies können Gerichte, Lebensmittel wie Obst und Gemüse sein die der Händler aufgrund von Schönheitsfehlern oder kurz vor Ablaufdatum nicht mehr verkaufen. Der Händler sendet dir die Angebote zu stark reduzierten Preisen. So könnt Ihr beide einen Beitrag zur Reduzierung der Lebensmittelverschwendung beitragen!
            </div>
          </div>

          <div className="content__body__features__element2 element">
            <div className="content__body__features__title title2">Du bist ein Abenteurer?</div>
            <div className="content__body__features__detail block2">
              Du kannst selbst konfigurieren, ob du auch Aktionen von Händlern in deiner Nähe bekommen möchtest, mit denen du noch nicht gekoppelt bist. Ideal wenn du verreist.
            </div>
          </div>

          <div className="content__body__features__element4">
            <font style={{ color: '#2eb466', fontWeight: 'bold' }}>>100k</font> Nutzer | <font style={{ color: '#2eb466', fontWeight: 'bold' }}>>30k</font> Händler | <font style={{ color: '#2eb466', fontWeight: 'bold' }}>15,6</font> neue Angebote pro Minute | <font style={{ color: '#2eb466', fontWeight: 'bold' }}>350k</font> erstellte Angebote
          </div>
        </div>
      </div>
    )
  }

  return (
    <Layout className="layout">
      <Header className="layout__header">
        <div className="layout__header__logo">
          <img className="layout__header__logo__img" src="chev.png" alt="logo" />
          <img className="layout__header__logo__text" src="loremio.png" alt="logo" />
        </div>
        <Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']} onClick={navigate}>
          <Menu.Item key='1'>Unternehmen</Menu.Item>
          <Menu.Item key='2'>Features</Menu.Item>
          {/**<Menu.Item key='3'>Anleitung</Menu.Item>**/}
          <Menu.Item key='4'>Hol die App</Menu.Item>
        </Menu>
      </Header>

      <Content>
        <div className="content__body">
          <Space align='center' direction='vertical' size={width < 1340 ? 180 : 320}>
            <div className='test1' ref={tab === '1' ? scrollRef : null}>
              <ShowÜber />
            </div>
            <div className='test2' ref={tab === '2' ? scrollRef : null}>
              <ShowFeatures />
            </div>
            <div className='test3' ref={tab === '4' ? scrollRef : null}>
              <HolDieApp />
            </div>

          </Space>
        </div>

      </Content>


      <Footer>Scio.AI ©2021</Footer>
    </Layout>
  );
}

export default App;
