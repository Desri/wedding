'use client';
import React, { useEffect } from 'react';
import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";
import GeneralDashboardTabComponent from './general';
import CollaboratorsDashboardTabComponent from './collaborators';
import ModerationDashboardTabComponent from "./moderation";
import SlideshowDashboardTabComponent from "./slideshow";
import AppearanceDashboardTabComponent from "./appearance";
import { getEvent } from '../../../../services/client/event';

const DetailEventDashboardComponent = () => {
  /* eslint-disable */
  useEffect(() => {
    fetchEvent();
  }, []);
  const fetchEvent = () => {
    getEvent()
      .then((res: any) => {
        console.log('Check Res', res)
      })
      .catch((err: any) => {
        console.log('Check Error', err)
      });
  };
  /* eslint-enable */
  return (
    <>
      <div className="flex w-full flex-col">
        <Tabs aria-label="Options" variant="underlined" className="tabs-event">
          <Tab key="general" title="General">
            <Card className="p-8">
              <CardBody>
                <GeneralDashboardTabComponent />
              </CardBody>
            </Card>
          </Tab>
          <Tab key="appearance" title="Appearance">
            <Card className="p-8">
              <CardBody>
                <AppearanceDashboardTabComponent />
              </CardBody>
            </Card>
          </Tab>
          <Tab key="slideshow" title="Slideshow">
            <Card className="p-8">
              <CardBody>
                <SlideshowDashboardTabComponent />
              </CardBody>
            </Card>
          </Tab>
          <Tab key="moderation" title="Moderation">
            <Card className="p-8">
              <CardBody>
                <ModerationDashboardTabComponent />
              </CardBody>
            </Card>
          </Tab>
          <Tab key="collaborators" title="Collaborators">
            <Card className="p-8">
              <CardBody>
                <CollaboratorsDashboardTabComponent />
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>
    </>
  );
};

export default DetailEventDashboardComponent;
