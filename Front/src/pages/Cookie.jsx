import "../scss/Cookie.scss";
function Cookie() {
  return (
    <div className="container">
      <div className="item">
        <h2>Qu’est-ce qu’un cookie ?</h2>
        <p>
          Un cookie est un petit fichier texte sauvegardé sur votre ordinateur
          lorsque vous visitez un site web. Ce fichier texte enregistre des
          informations qui peuvent être lues par un site web lorsque vous le
          visitez de nouveau plus tard. Certains de ces cookies sont nécessaires
          pour accéder à certaines fonctionnalités d’un site. D’autres cookies
          sont d’utilité pratique pour le visiteur : ils sauvegardent de manière
          sécurisée votre nom d’utilisateur ou vos préférences linguistiques par
          exemple. Les cookies signifient tout simplement qu’à chaque fois que
          vous visitez un site web, vous n’avez pas besoin de saisir à nouveau
          les mêmes informations.
        </p>
      </div>

      <div className="item">
        <h2>Pourquoi Xmass Clicker utilise des cookies ?</h2>
        <p>
          Nous utilisons des cookies pour vous fournir une expérience
          utilisateur optimale et adaptée à vos préférences personnelles. En
          utilisant les cookies, Les cookies sont également utilisés pour
          optimiser la performance du site. Xmass Clicker a pris toutes les
          mesures organisationnelles et techniques pour protéger vos données
          personnelles ainsi que d’une éventuelle perte d’informations ou de
          toute forme de traitement illicite. Pour davantage d’informations,
          consultez notre Politique de confidentialité.
        </p>
      </div>

      <div className="item">
        <h2>Comment puis-je désactiver les cookies ?</h2>
        <p>
          Vous pouvez paramétrer votre navigateur Internet pour désactiver les
          cookies. Notez toutefois que si vous désactivez les cookies, votre nom
          d’utilisateur ainsi que votre mot de passe ne seront plus sauvegardés
          sur aucun site web.
        </p>
      </div>

      <div className="item">
        <h2>Firefox :</h2>
        <p>
          1. Ouvrez Firefox <br />
          2. Appuyez sur la touche « Alt » <br />
          3. Dans le menu en haut de la page cliquez sur « Outils » puis «
          Options » <br />
          4. Sélectionnez l’onglet « Vie privée » <br />
          5. Dans le menu déroulant à droite de « Règles de conservation »,
          cliquez sur « utiliser les paramètres personnalisés pour l’historique
          » <br />
          6. Un peu plus bas, décochez « Accepter les cookies » <br />
          7. Sauvegardez vos préférences en cliquant sur « OK »
        </p>
      </div>

      <div className="item">
        <h2>Internet Explorer/Edge :</h2>
        <p>
          1. Ouvrez Internet Explorer <br />
          2. Dans le menu « Outils », sélectionnez « Options Internet » <br />
          3. Cliquez sur l’onglet « Confidentialité » <br />
          4. Cliquez sur « Avancé » et décochez « Accepter » <br />
          5. Sauvegardez vos préférences en cliquant sur « OK »
        </p>
      </div>

      <div className="item">
        <h2>Safari :</h2>
        <p>
          1. Ouvrez Safari <br />
          2. Dans la barre de menu en haut, cliquez sur « Safari », puis «
          Préférences » <br />
          3. Sélectionnez l’icône « Sécurité » <br />
          4. À côté de « Accepter les cookies », cochez « Jamais » <br />
          5. Si vous souhaitez voir les cookies qui sont déjà sauvegardés sur
          votre ordinateur, cliquez sur « Afficher les cookies »
        </p>
      </div>

      <div className="item">
        <h2>Google Chrome :</h2>
        <p>
          1. Ouvrez Google Chrome <br />
          2. Cliquez sur l’icône d’outils dans la barre de menu <br />
          3. Sélectionnez « Options » <br />
          4. Cliquez sur l’onglet « Options avancées » <br />
          5. Dans le menu déroulant « Paramètres des cookies », sélectionnez «
          Bloquer tous les cookies »
        </p>
      </div>
    </div>
  );
}

export default Cookie;
