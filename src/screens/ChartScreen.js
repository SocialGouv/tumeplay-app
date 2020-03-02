import React from 'react';

import {View, Text, ScrollView} from 'react-native';

import Colors from '../styles/Color';
import autoScrollToTop from '../hooks/autoScrollToTop';
import UnorderedListRow from './components/global/UnorderedListRow';
import TextLink from './components/global/TextLink';

export default function ChartScreen(props) {
  autoScrollToTop(props);

  const contentStyle = {
    title: {
      color: Colors.secondaryText,
      fontFamily: Colors.appTitleFont,
      fontSize: 30,
      lineHeight: 34,
      marginBottom: 20,
      paddingBottom: 0,
      flex: 2,
    },
    subTitle: {
      color: Colors.secondaryText,
      fontFamily: Colors.appTitleFont,
      fontSize: 22,
      lineHeight: 25,
      marginTop: 15,
      marginBottom: 15,
      paddingBottom: 0,
      flex: 2,
    },
    smallTitle: {
      color: Colors.secondaryText,
      fontFamily: Colors.appTitleFont,
      fontSize: 18,
      lineHeight: 25,
      marginTop: 15,
      marginBottom: 10,
      paddingBottom: 0,
      flex: 2,
    },
    text: {
      color: Colors.secondaryText,
      fontFamily: Colors.textFont,
      fontSize: 14,
      marginBottom: 10,
      paddingBottom: 0,
      marginTop: 0,
      paddingTop: 0,
      textAlign: 'left',
      flex: 1,
    },
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.backgroundColor,
        padding: 15,
        paddingBottom: 30,
      }}>
      <ScrollView style={{flex: 1}}>
        <Text style={contentStyle.title}>Tumeplay</Text>

        <Text style={contentStyle.text}>
          Cette application est une initiative du Ministère de la Santé et des
          Solidarités, il s&apos;agit de la{' '}
          <TextLink
            targetUrl={
              'https://www.gouvernement.fr/sites/default/files/contenu/piece-jointe/2018/03/dossier_de_presse_-_priorite_prevention_rester_en_bonne_sante_tout_au_long_de_sa_vie.pdf'
            }>
            Mesure n°9 du Plan national de Santé publique.
          </TextLink>
          {'\n'}
          {'\n'}
          Il est porté par 3 Agences régionales de santé (ARS) pilotes :{'\n'}
          <UnorderedListRow>ARS Guyane</UnorderedListRow>
          {'\n'}
          <UnorderedListRow>ARS Ile-de-France</UnorderedListRow>
          {'\n'}
          <UnorderedListRow>ARS Nouvelle-Aquitaine</UnorderedListRow>
          {'\n'}
          {'\n'}
          La plateforme est réalisée par la{' '}
          <TextLink targetUrl={'https://incubateur.social.gouv.fr/'}>
            Fabrique des Ministères sociaux
          </TextLink>
          .
        </Text>

        <Text style={contentStyle.subTitle}>
          Traitement des données à caractère personnel
        </Text>
        <Text style={contentStyle.text}>
          <UnorderedListRow>
            L&apos;application TumePlay enregistre les seules informations à
            caractère personnel indispensables à ses fonctionnalités.
          </UnorderedListRow>
          {'\n'}
          <UnorderedListRow>
            Les données relatives aux réponses appoertées aux différents quiz
            sont anonymisées. Elles sont stockées le temps de la session
            directement sur l&apos;apparail de l&apos;utilisateur.
          </UnorderedListRow>
          {'\n'}
          <UnorderedListRow>
            Les utilisateurs pour commander l&apos;une des boites proposées -
            qui contiennent différents outils de prévention - sont amenés à
            donner des informations relatives à leur adresse et coordonnées. Ces
            données ne sont pas stockées avec les informations relatives à votre
            téléphone.
          </UnorderedListRow>
          {'\n'}
          {'\n'}
          Nous nous engageons à ne jamais céder ces informations à des tiers.
          {'\n'}
          {'\n'}
          Vous avez un droit d’accès, de rectification et de suppression de vos
          données. Pour l&apos;exercer, faites-nous parvenir une demande en
          précisant la date et l’heure précise de la requête - ces éléments sont
          indispensables pour nous permettre de retrouver votre recherche - par
          voie électronique à l&apos;adresse suivante :{' '}
          <TextLink
            targetUrl={'mailto:contact.tumeplay@fabrique.social.gouv.fr'}>
            contact.tumeplay@fabrique.social.gouv.fr
          </TextLink>{' '}
          ou par voie postale :{'\n'}
          Direction des systèmes d’information Ministère des affaires sociales
          et de la santé 39-43 Quai André Citroën 75015 PARIS
        </Text>

        <Text style={contentStyle.subTitle}>
          Utilisation de témoins de connexion (« cookies »)
        </Text>
        <Text style={contentStyle.text}>
          Lors de la consultation de la plateforme, des témoins de connexion,
          dits « cookies », sont déposés sur votre ordinateur, votre mobile ou
          votre tablette.{'\n'}
          {'\n'}
          Ces cookies permettent d&apos;établir des mesures statistiques de
          fréquentation et d&apos;utilisation du site pouvant être utilisées à
          des fins de suivi et d&apos;amélioration du service :{'\n'}
          <UnorderedListRow>
            Les données collectées ne sont pas recoupées avec d’autres
            traitements.
          </UnorderedListRow>
          {'\n'}
          <UnorderedListRow>
            Le cookie déposé sert uniquement à la production de statistiques
            anonymes.
          </UnorderedListRow>
          {'\n'}
          <UnorderedListRow>
            Le cookie ne permet pas de suivre la navigation de l’internaute sur
            d’autres sites.
          </UnorderedListRow>
          {'\n'}
          {'\n'}À tout moment, vous pouvez refuser l’utilisation des cookies et
          désactiver le dépôt sur votre ordinateur en utilisant la fonction
          dédiée de votre navigateur (fonction disponible notamment sur
          Microsoft Internet Explorer 11, Google Chrome, Mozilla Firefox, Apple
          Safari et Opera).
        </Text>

        <Text style={contentStyle.smallTitle}>À savoir</Text>
        <Text style={contentStyle.text}>
          La mesure d&apos;audience (nombre de visites, pages consultées) est
          réalisée par un outil libre intitulé{' '}
          <TextLink targetUrl={'https://matomo.org/'}>Matomo</TextLink>{' '}
          spécifiquement paramétré, respectant les conditions d&apos;exemption
          du consentement de l&apos;internaute définies par la{' '}
          <TextLink
            targetUrl={
              'https://www.cnil.fr/fr/solutions-pour-la-mesure-daudienc'
            }>
            recommandation « Cookies »
          </TextLink>{' '}
          de la Commission nationale informatique et libertés (CNIL). Cela
          signifie, notamment, que ces cookies ne servent qu&apos;à la
          production de statistiques anonymes et ne permettent pas de suivre la
          navigation de l&apos;internaute sur d&apos;autres sites.{'\n'}
          {'\n'}
          Vous pouvez tout de même désactiver cet outil :{' '}
          <TextLink
            targetUrl={
              'https://matomo.fabrique.social.gouv.fr/index.php?module=CoreAdminHome&action=optOut&language=fr&backgroundColor=&fontColor=&fontSize=&fontFamily='
            }>
            Désactiver Matomo
          </TextLink>
          {'\n'}
          {'\n'}À tout moment, vous pouvez refuser l’utilisation des cookies et
          désactiver le dépôt sur votre ordinateur en utilisant la fonction
          dédiée de votre navigateur (fonction disponible notamment sur
          Microsoft Internet Explorer 11, Google Chrome, Mozilla Firefox, Apple
          Safari et Opera).{'\n'}
          {'\n'}
          Pour aller plus loin, vous pouvez consulter les fiches proposées par
          la Commission Nationale de l&apos;Informatique et des Libertés (CNIL)
          :{'\n'}
          <UnorderedListRow>
            <TextLink
              targetUrl={
                'https://www.cnil.fr/fr/cookies-traceurs-que-dit-la-loi'
              }>
              Cookies & traceurs : que dit la loi ?
            </TextLink>
          </UnorderedListRow>
          {'\n'}
          <UnorderedListRow>
            <TextLink
              targetUrl={
                'https://www.cnil.fr/fr/cookies-les-outils-pour-les-maitriser'
              }>
              Cookies : les outils pour les maîtriser
            </TextLink>
          </UnorderedListRow>
          {'\n'}
        </Text>

        <Text style={contentStyle.subTitle}>Accessibilité</Text>
        <Text style={contentStyle.smallTitle}>
          Signaler un dysfonctionnement
        </Text>
        <Text style={contentStyle.text}>
          Si vous rencontrez un défaut d’accessibilité vous empêchant d’accéder
          à un contenu ou une fonctionnalité du site, merci de nous en faire
          part. Si vous n’obtenez pas de réponse rapide de notre part, vous êtes
          en droit de faire parvenir vos doléances ou une demande de saisine au
          Défenseur des droits.
        </Text>
        <Text style={contentStyle.smallTitle}>En savoir plus</Text>
        <Text style={contentStyle.text}>
          Pour en savoir plus sur la politique d’accessibilité numérique de
          l’État :{' '}
          <TextLink
            targetUrl={
              'https://references.modernisation.gouv.fr/accessibilite-numerique'
            }>
            Politique d&apos;accessibilité
          </TextLink>
        </Text>
        <Text style={contentStyle.smallTitle}>Sécurité</Text>
        <Text style={contentStyle.text}>
          Le site est protégé par un certificat électronique, matérialisé pour
          la grande majorité des navigateurs par un cadenas. Cette protection
          participe à la confidentialité des échanges.{'\n'}
          En aucun cas les services associés à la plateforme ne seront à
          l’origine d’envoi de courriels pour demander la saisie d’informations
          personnelles.
        </Text>
      </ScrollView>
    </View>
  );
}
