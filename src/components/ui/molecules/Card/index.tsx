import React from 'react';
import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { Container, DataContent, ImageContent, SeriesContent, EventsContent, SeriesWrapper, EventsWrapper } from './styles';

import { Image } from '@src/components/ui/atoms/Image';
import { Title } from '@src/components/ui/atoms/Title';
import { DetailsText } from '../../atoms/DetailsText';
import { SubTitle } from '../../atoms/SubTitle';

type CardProps = {
  img_url: string;
  title: string;
  series: any;
  events: string;
  handlePress: () => void;
};

export function Card({ img_url, title, series, events,  handlePress }: CardProps) {
  return (
    <Container style={styles.shadow} onPress={handlePress}>
      <DataContent>
        {/* <Title title={title} styles={{ marginLeft: RFValue(10) }} /> */}
        <Title title={title} />
        <SeriesContent>
          <SubTitle data="Series: "/>
          <SeriesWrapper horizontal>
            <DetailsText data={series}/>
          </SeriesWrapper>
        </SeriesContent>
        <EventsContent>
          <SubTitle data="Eventos: "/>
          <DetailsText data={events}/>
        </EventsContent>
      </DataContent>
      <ImageContent>
        <Image img_url={img_url} />
      </ImageContent>


    </Container>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
});
