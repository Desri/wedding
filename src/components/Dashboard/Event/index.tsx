'use client';
import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";
import GeneralDashboardTabComponent from './general';
import CollaboratorsDashboardTabComponent from './collaborators';
import ModerationDashboardTabComponent from "./moderation";
import SlideshowDashboardTabComponent from "./slideshow";

const EventDashboardComponent = () => {
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
            <Card>
              <CardBody>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
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

export default EventDashboardComponent;
