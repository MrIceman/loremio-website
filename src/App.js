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
              <div>Lade <img style={{ height: '55px', paddingBottom: '5px' }} src="loremio.png" alt="logo" /> auf Android oder iOS runter.</div>

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
              <div style={{ maxWidth: '900px' }}>Lade <img style={{ height: '65px', paddingBottom: '10px' }} src="loremio.png" alt="logo" /> auf Android oder iOS runter.
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
                <img className="content__body__graphic__screenshot" src="src2.png" alt="screenshot" />
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
              <div><font style={{ fontWeight: 'bold', color: '#ffad4e' }}>Hilf deiner Region sich zu entwickeln!</font></div>
              <div className="content__body__bomber__additional-text">
                Verbinde dich mit deinem Friseur, Lieblings-Italiener oder Buchladen. Es kostet dich nichts und du tust was gutes für deine Region! Und dazu bekommst du sogar noch die heißesten Schnäppchen mit..
              </div>
              <div className="content__body__graphic">
                <img className="content__body__graphic__screenshot" src="src1.png" alt="screenshot" />
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
              <div style={{ marginRight: '25px' }}><font style={{ fontWeight: 'bold', color: '#ffad4e' }}>Hilf deiner Region sich zu entwickeln!</font>
                <div className="content__body__bomber__additional-text">
                  Verbinde dich mit deinem Friseur, Lieblings-Italiener oder Buchladen. Es kostet dich nichts und du tust was gutes für deine Region! Und dazu bekommst du sogar noch die heißesten Schnäppchen mit..
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
                <img className="content__body__graphic__screenshot" src="src1.png" alt="screenshot" />
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
            <div className="content__body__features__title title1">Entdecke Angebote in deiner Umgebung</div>
            <div className="content__body__features__detail block1">
              Finde Händler mit aktuellen Angeboten in deiner Nähe! Nutze dabei die Filteraktion, um die Suche auf deinen Bedarf anzupassen.
            </div>
          </div>

          <div className="content__body__features__element2 element">
            <div className="content__body__features__title title2">Neue Läden kennenlernen</div>
            <div className="content__body__features__detail block2">
              Finde heraus wer in deiner Nähe alles an Loremio teilnimmt und nehme an ihren Angebotsaktionen teil.
            </div>
          </div>

          <div className="content__body__features__element1 element">
            <div className="content__body__features__title title1">Folge den Lieblingsläden</div>
            <div className="content__body__features__detail block1">
              Ob dein Friseur, dein Buchladen oder dein Lieblingsrestaurant - Koppel dich mit ihnen und erhalte eine Benachrichtigung sobald sie eine neue Aktion am start haben.
            </div>
          </div>

          <div className="content__body__features__element2 element">
            <div className="content__body__features__title title2">Keine Anmeldung nötig</div>
            <div className="content__body__features__detail block2">
              Du kannst dir zwar bei Loremio ein Konto machen, doch zum nutzen der App samt seinen gesamten Funktionalitäten brauchst du kein eigenes Konto.
            </div>
          </div>

          <div className="content__body__features__element1 element">
            <div className="content__body__features__title title1">Nehme mit deinem Unternehmen bei Loremio teil</div>
            <div className="content__body__features__detail block1">
              Mit nur wenigen Schritten kannst du dein Unternehmen problemlos bei Loremio-Netzwerk anmelden und deinen direkten Draht zu deiner Kundschaft aufbauen.
            </div>
          </div>

          <div className="content__body__features__element4">
            <font style={{ color: '#ffad4e', fontWeight: 'bold' }}>>100k</font> Nutzer | <font style={{ color: '#ffad4e', fontWeight: 'bold' }}>>30k</font> Händler | <font style={{ color: '#ffad4e', fontWeight: 'bold' }}>15,6</font> neue Angebote pro Minute | <font style={{ color: '#ffad4e', fontWeight: 'bold' }}>350k</font> erstellte Angebote
          </div>
        </div>
      </div>
    )
  }

  return (
    <Layout className="layout">
      <Header className="layout__header">
        <div className="layout__header__logo">
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
            <div ref={tab === '1' ? scrollRef : null}>
              <ShowÜber />
            </div>
            <div ref={tab === '2' ? scrollRef : null}>
              <ShowFeatures />
            </div>
            <div>
              <img style={{ width: '100%' }} src="src3.png" alt="logo" />
            </div>

            <div class="feature-wrap icons">
              <div class="feature-content icons">
                <img src="https://uploads-ssl.webflow.com/62153b2220de8c6663771c8e/62153b2220de8c157f771ce3_icon-burger-magenta.svg" width="80" alt="" class="feature-icon" />
                <h4 class="black-text">Kundenbeziehung</h4>
                <p class="paragraph-10">Durch den direkten Kontakt mit den Kunden, von welchen Sie auch erreicht werden wollen, stärken Sie die&nbsp;Kundenbeziehung. Sie haben so die Gelegenheit langfristig mit Ihren Kunden in Kommunikation zu bleiben</p>
              </div>
              <div class="feature-content icons">
                <img src="https://uploads-ssl.webflow.com/62153b2220de8c6663771c8e/62153b2220de8c4264771ce4_icon-data-magenta.svg" width="74" alt="" class="feature-icon" />
                <h4 class="black-text">Absatz- und Werbekanal</h4>
                <p class="paragraph-9">Mit Loremio bietet sich Ihnen nicht nur eine Möglichkeit für persönliche Werbung - sondern Sie können&nbsp;Ihre Einträge bei Loremio auf Instagram und Facebook veröffentlichen</p>
              </div>
              <div class="feature-content icons">
                <img src="https://uploads-ssl.webflow.com/62153b2220de8c6663771c8e/62153b2220de8c4264771ce4_icon-data-magenta.svg" alt="" class="feature-icon" />
                <h4 class="black-text">Digitalisierung</h4>
                <p class="paragraph-8">Ihnen wird nicht nur für Ihr Unternehmen eine digitale Präsenz geboten, sondern auch für Ihre Aktionen und Angebote. Die Informationen sind nicht nur über die mobile Applikation aufrufbar, sondern auch übers Web.</p>
              </div>
            </div>


            <div ref={tab === '4' ? scrollRef : null}>
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
