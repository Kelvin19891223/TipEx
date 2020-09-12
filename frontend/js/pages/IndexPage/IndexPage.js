import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { useDispatch, useSelector } from 'react-redux';
import { BlackButton } from '../../component/Button'
import {Container,Grid, Link} from '@material-ui/core';
import IMG from '../../../images/banner.jpg'
import clsx from 'clsx';
import TippedHorseCard from './TippedHorseCard';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import TrendingCard from './TrendingCard';
import {caretDown} from 'react-icons-kit/fa/caretDown'
import {caretUp} from 'react-icons-kit/fa/caretUp'
import Icon from 'react-icons-kit';
import FeatureNewsCard from './FeatureNewsCard';
import TodayRacing from './TodayRacing';
import styled from 'styled-components';
import { facebook } from 'react-icons-kit/icomoon/facebook';
import { twitter } from 'react-icons-kit/icomoon/twitter';
import {instagram} from 'react-icons-kit/fa/instagram'
import Nav from 'react-bootstrap/Nav';
import NavLink from 'react-bootstrap/NavLink';

const useStyles = makeStyles(() => ({
  firstLine: {
    paddingLeft: 15,
    paddingRight: 15,
  },

  bannerImage: {
    borderRadius: 10,
    'box-shadow': '0px 1px 5px #C1C8D780;',
    objectFit: 'cover'
  },

  tipedHorse: {
    borderRadius: 20,
    marginTop: 20,
    marginBottom: 20,
    'box-shadow': '0px 1px 5px #C1C8D780;',
    minHeight: 250,
  },

  tiphorse_title: {
    fontFamily: 'Roboto',
    fontSize: 20,
    letterSpacing: 0,
    fontWeight: 500,
    padding: '11px 22px'
  },

  detailview: {
    borderRadius: 20,
    marginTop: 20,
    marginBottom: 20,
    'box-shadow': '0px 1px 5px #C1C8D780;',
    minHeight: 250,
    padding: '11px 0px',

    "& nav": {
      paddingLeft: 65
    },

    "& nav a:hover": {
      'border': 'none!important',
      color: '#0E2856',
      'border-bottom': '2px solid #0E2856!important'
    },

    "& nav a": {
      color: '#b6b7b9',
      'border': '0px solid transparent!important',
      marginBottom: 0,
      fontFamily: 'Roboto'
    },

    "& nav a.active": {
      fontWeight: 'bold',
      color: '#0E2856',
      'border': 'none!important',
      'border-bottom': '2px solid #0E2856!important'
    }
  },

  line: {
    height: 1,
    borderTop: '1px solid #eef1f6'
  },

  tippedhorseCard: {
    padding: '5px 11px',
    // boxShadow: '0 1px 1px 1px #f7f3f3'
  },

  featureView: {
    borderRadius: 20,
    marginBottom: 20,
    'box-shadow': '0px 1px 5px #C1C8D780;',
    minHeight: 250,
    padding: '11px 0px',

    "& nav": {
      paddingLeft: 65
    },

    "& nav a:hover": {
      'border': 'none!important',
      color: '#0E2856',
      'border-bottom': '2px solid #0E2856!important'
    },

    "& nav a": {
      color: '#b6b7b9',
      'border': '0px solid transparent!important',
      marginBottom: 0,
      fontFamily: 'Roboto'
    },

    "& nav a.active": {
      fontWeight: 'bold',
      color: '#0E2856',
      'border': 'none!important',
      'border-bottom': '2px solid #0E2856!important'
    }
  },

  feature_title: {
    fontFamily: 'Roboto',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2B313D',
    padding: '10px 15px',
    paddingTop: 1,
  },

  feature_body: {
    minHeight: 230
  },

  showMore: {
    fontFamily: 'Roboto',
    fontSize: 12,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingTop: 5,
    color: '#949FB7'
  },
  pr5: {
    paddingRight: 5
  },

  todayRacing: {
    marginTop: 20
  },

  flexView: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingRight: 20
  },

  adsenseView: {
    marginTop: 62
  },

  buttonView: {
    marginTop: 13
  },

  footerview: {
    margin: '10px 0',
    '& a': {
      padding: '0!important',
      paddingRight: '25px!important'
    }
  },

  tixex: {
    fontFamily: 'Roboto',
    fontSize: 10,
    color: '#949FB7'
  }
}));

const Info = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 150px;
  > div {
    > a {
      > div {
        border-radius: 19px;
        width: 38px;
        height: 38px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        background-color: #0E2856;
        color: #FFF;
      }

      &:hover > div {
        color: #0E2856;
        background-color: #FFF;
        border: 1px solid #0E2856;
      }

      > div > i {
        display: grid!important;
      }
    }
  }
`;

const InfoItem = styled.div`
  flex: 0 0 33.333333%;
  max-width: 33.333333%;
  text-align: center;
  @media (max-width: 600px) {
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const InfoIcon = styled.div`
  color: #bfbcc7;
  margin-bottom: 25px;
`;

const IndexPage = props => {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={0}>
        <Grid item lg={8} md={8} xs={12}>
          <div className={classes.firstLine}>
            <div>
              <img src={IMG} width="100%" height="140" alt="logo" className={classes.bannerImage}/>
            </div>

            <div className={clsx(classes.tipedHorse,"white-bg")}>
              <div className={classes.tiphorse_title}>
                Most Tipped Horses
              </div>

              <div className={classes.line}>&nbsp;</div>

              <div className={classes.tippedhorseCard}>
                <Grid container>
                  <Grid item lg={3} md={3} xs={6}>
                    <TippedHorseCard
                      title="3. Groot"
                      eventNo="9"
                      tipCount="67"
                      competition="Pakenham"
                      stake="2.10"
                    />
                  </Grid>
                  <Grid item lg={3} md={3} xs={6}>
                    <TippedHorseCard
                      title="3. Groot"
                      eventNo="9"
                      tipCount="67"
                      competition="Pakenham"
                      stake="2.10"
                    />
                  </Grid>
                  <Grid item lg={3} md={3} xs={6}>
                    <TippedHorseCard
                      title="3. Groot"
                      eventNo="9"
                      tipCount="67"
                      competition="Pakenham"
                      stake="2.10"
                    />
                  </Grid>
                  <Grid item lg={3} md={3} xs={6}>
                    <TippedHorseCard
                      title="3. Groot"
                      eventNo="9"
                      tipCount="67"
                      competition="Pakenham"
                      stake="2.10"
                    />
                  </Grid>

                </Grid>

              </div>
            </div>

            <div className={clsx(classes.detailview, "white-bg")}>
              <Tabs defaultActiveKey="trending" id="trending">
                <Tab eventKey="trending" title="TRENDING">
                  {
                    [1,2,3,4,5,6,7,8,9,10].map((item, key)=> {
                      return <TrendingCard
                        key={key}
                        type={item}
                        nickName="VicTrialTracker"
                        time="3 minutes ago"
                        title="DOES WHIP USE MAKE A HORSE GO FASTER ?"
                        aNickname="bazuden"
                        aAnswer="As a kid I slapped a horse on the arse to try to make it run a..."
                        heartCount={986}
                        messageCount={23}
                      />
                    })
                  }
                </Tab>
                <Tab eventKey="lastest" title="LASTEST">
                  {
                    [2,3,4,5,10].map((item, key)=> {
                      return <TrendingCard
                        key={key}
                        type={item}
                        nickName="VicTrialTracker"
                        time="3 minutes ago"
                        title="DOES WHIP USE MAKE A HORSE GO FASTER ?"
                        aNickname="bazuden"
                        aAnswer="As a kid I slapped a horse on the arse to try to make it run a..."
                        heartCount={986}
                        messageCount={23}
                      />
                    })
                  }
                </Tab>
                <Tab eventKey="feed" title="FEED 3">
                  {
                    [1,2,3,4,5,6,7,8].map((item, key)=> {
                      return <TrendingCard
                        key={key}
                        type={item}
                        nickName="VicTrialTracker"
                        time="3 minutes ago"
                        title="DOES WHIP USE MAKE A HORSE GO FASTER ?"
                        aNickname="bazuden"
                        aAnswer="As a kid I slapped a horse on the arse to try to make it run a..."
                        heartCount={986}
                        messageCount={23}
                      />
                    })
                  }
                </Tab>
              </Tabs>
            </div>
          </div>
        </Grid>
        <Grid item lg={4} md={4} xs={12}>
          {/* Featured News */}
          <div className={clsx(classes.featureView, "white-bg")}>
            <div className={classes.feature_title}>
                Featured News
            </div>

            <div className={classes.line}>&nbsp;</div>

            <div className={classes.feature_body}>
              {
                [1,2,3].map((item,index) => {
                  return <FeatureNewsCard
                    key={index}
                    tag="Tips"
                    description="Spring carnival futures tips from the TipEx team"
                  />
                })
              }
            </div>

            <div className={classes.showMore}>
              <Icon icon={caretDown} size={15} className={classes.pr5}/>
              Show more
            </div>
          </div>

          <div className={clsx(classes.featureView, classes.todayRacing, "white-bg")}>
            <div className={classes.flexView}>
                <div className={classes.feature_title}>Today's Racing</div>
                <div>
                  <BlackButton
                    title="NEXT TO JUMP"
                    width={103}
                    height={30}
                    fontSize={12}
                    className={classes.pr5}
                  />

                  <BlackButton
                    title="RESULTS"
                    width={78}
                    height={30}
                    fontSize={12}
                  />
                </div>
            </div>

            <div className={classes.line}>&nbsp;</div>

            <div className={classes.feature_body}>
              {
                [1,2,3,4].map((item,index) => {
                  return <TodayRacing
                    key={index}
                    eventNo={index+1}
                    competition="Pakenham"
                    state="VIC"
                    time="26m"
                  />
                })
              }
            </div>
          </div>

          <div className={classes.adsenseView}>
              <img src={IMG} width="100%" height="auto" alt="adsense" />
          </div>

          <div className={classes.buttonView}>
            <Info>
              <InfoItem>
                <Link href="https://www.instagram.com/TipExAu/" target="_blank">
                  <InfoIcon>
                    <Icon icon={instagram} size={18} />
                  </InfoIcon>
                </Link>
              </InfoItem>

              <InfoItem>
                <Link href="https://twitter.com/TipExAus" target="_blank">
                  <InfoIcon>
                    <Icon icon={twitter} size={18} />
                  </InfoIcon>
                </Link>
              </InfoItem>

              <InfoItem>
                <Link href="https://www.facebook.com/TipExAu/" target="_blank">
                  <InfoIcon>
                    <Icon icon={facebook} size={20} />
                  </InfoIcon>
                </Link>
              </InfoItem>

            </Info>
          </div>

          <div className={classes.footerview}>
            <Nav className="mr-auto">
              <NavLink href="#policy" className={classes.tixex}>Privacy Policy</NavLink>
              <NavLink href="#condition" className={classes.tixex}>Terms and Conditions</NavLink>
              <NavLink href="/help" className={classes.tixex}>Help</NavLink>
              <NavLink href="#tipsters" className={classes.tixex}>Responsible Gambling</NavLink>
            </Nav>
          </div>

          <div className={classes.tixex}>
            © 2020 TipEx
          </div>
        </Grid>
      </Grid>

      {/* <BlackButton
      type="submit"
      title="Publish Later"
      fontSize={18}
      isMaterial
      width={172}
      height={46}
      /> */}
    </div>
  );
};

IndexPage.propTypes = {
  history: PropTypes.object
};

export default withRouter(IndexPage)
