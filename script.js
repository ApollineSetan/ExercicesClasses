//Implémentation de la classe Utilisateur avec trois propriétés
class Utilisateur {
  constructor(nom, publications, groupes) {
    this.nom = nom;
    this.publications = [];
    this.groupes = [];
  }

//Implémentation de la méthode qui crée une publication. Si le contenu 
//contient des mots inappropriés, une exception est levée avec un message
//"Erreur : contenu inapproprié détecté"
  publierContenu(publication) {
    const motsInappropries = ["putain", "stupide", "idiot"];
    if (motsInappropries.some(mot => publication.includes(mot))){
      throw new Error("Erreur : contenu inapproprié détecté");
    } else {
    this.publications.push(publication);
    }
  }
}

//Implémentation de la classe Publication avec trois propriétés
class Publication {
  constructor(auteur, contenu, commentaires) {
    this.auteur = auteur;
    this.contenu = contenu;
    this.commentaires = [];
  }

//Imprémentation de la méthode ajouter un commentaire. 
//Ca déclenche une exception si le commentaire comprend une insulte
  ajouterCommentaire(commentaire) {
    const motsInappropries = ["putain", "stupide", "idiot"];
    try {
      if (motsInappropries.some(mot => commentaire.contenu.includes(mot))) {
        throw new Error("Erreur : contenu inapproprié détecté");
      } else {
        this.commentaires.push(commentaire);
      }
  } catch (error) {
      console.error(error.message);
  }
  }
}

//Implémentation de la classe Commentaire avec deux propriétés
class Commentaire {
  constructor(auteur, contenu) {
    this.auteur = auteur;
    this.contenu = contenu;
  }
}


//Implémentation de la classe Groupes avec trois propriétés
class Groupe {
  constructor(nom, membres, estPrive) {
    this.nom = nom;
    this.membres = [];
    this.estPrive = true;
  }

//Imprémentation des méthodes ajouterUnMembre et afficherContenu
//La première ajoute un utilisateur à la liste des membres
//La deuxième vérifie si l'utilisateur est membre. S'il ne l'est pas,
//et que le groupe est privé, une exception est levée avec le message :
//"Erreur : vous n'avez pas accès à ce groupe"
  ajouterMembre(utilisateur) {
    this.membres.push(utilisateur);
  }
  afficherContenu(utilisateur) {
    try {
      if (this.estPrive && !this.membres.includes(utilisateur)) {
          throw new Error(`Erreur : vous n'avez pas accès à ce groupe`);
      }
  } catch (error) {
      console.error(error.message);
  }
  }
}


/* Série de tests générés avec l'IA

// Test de la classe Utilisateur et de la méthode publierContenu
const utilisateur1 = new Utilisateur("Alice");

try {
  utilisateur1.publierContenu("C'est un super post !");  // Publication valide
  console.log(utilisateur1.publications);  // Devrait afficher ["C'est un super post !"]
  
  utilisateur1.publierContenu("C'est un post stupide !");  // Publication invalide
} catch (error) {
  console.log(error.message);  // Devrait afficher "Erreur : contenu inapproprié détecté"
}

// Test de la classe Publication et de la méthode ajouterCommentaire
const publication1 = new Publication("Alice", "C'est un super post !");

const commentaire1 = new Commentaire("Bob", "C'est stupide ce post !");  // Commentaire invalide
const commentaire2 = new Commentaire("Charlie", "Super post !");  // Commentaire valide

// Ajouter un commentaire invalide
publication1.ajouterCommentaire(commentaire1);  // Devrait afficher une erreur "Erreur : contenu inapproprié détecté"

// Ajouter un commentaire valide
publication1.ajouterCommentaire(commentaire2);
console.log(publication1.commentaires);  // Devrait afficher [Commentaire { auteur: 'Charlie', contenu: 'Super post !' }]

// Test de la classe Groupe
const groupe1 = new Groupe("Groupe Privé", [], true);
const utilisateur2 = new Utilisateur("Bob");

groupe1.ajouterMembre(utilisateur2);

try {
  groupe1.afficherContenu(utilisateur2);  // Utilisateur membre, devrait afficher le contenu
  console.log("Accès autorisé au groupe");
  
  const utilisateur3 = new Utilisateur("Charlie");
  groupe1.afficherContenu(utilisateur3);  // Utilisateur non membre, devrait lever une erreur
} catch (error) {
  console.log(error.message);  // Devrait afficher "Erreur : vous n'avez pas accès à ce groupe"
}

// Test des groupes publics et privés
const groupePublic = new Groupe("Groupe Public", [], false);
const groupePrive = new Groupe("Groupe Privé", [], true);

const utilisateur4 = new Utilisateur("David");

groupePublic.afficherContenu(utilisateur4);  // Groupe public, accès autorisé, pas d'erreur
console.log("Accès au groupe public autorisé");

groupePrive.afficherContenu(utilisateur4);  // Groupe privé, accès interdit, devrait lever une erreur


// Test complet utilisateur -> publication -> commentaire
const utilisateur5 = new Utilisateur("Eve");

try {
  utilisateur5.publierContenu("Voici une publication très intéressante");  // Publication valide
  const publication2 = utilisateur5.publications[0];
  
  console.log("Publications de l'utilisateur Eve:", utilisateur5.publications);  // Devrait afficher ["Voici une publication très intéressante"]
  
  const commentaire3 = new Commentaire("Alice", "Super contenu !");  // Commentaire valide
  const commentaire4 = new Commentaire("Bob", "C'est stupide !");  // Commentaire invalide
  
  publication2.ajouterCommentaire(commentaire3);  // Commentaire valide
  publication2.ajouterCommentaire(commentaire4);  // Commentaire invalide, devrait afficher erreur
  
  console.log("Commentaires de la publication:", publication2.commentaires);  // Devrait afficher [Commentaire { auteur: 'Alice', contenu: 'Super contenu !' }]
} catch (error) {
  console.log(error.message);  // Devrait afficher "Erreur : contenu inapproprié détecté" si nécessaire
}

// Test d'ajout de plusieurs membres dans un groupe
const groupe2 = new Groupe("Groupe Multiple", [], true);
const utilisateur6 = new Utilisateur("Frank");
const utilisateur7 = new Utilisateur("Grace");

groupe2.ajouterMembre(utilisateur6);
groupe2.ajouterMembre(utilisateur7);

groupe2.afficherContenu(utilisateur6);  // Utilisateur membre, devrait afficher le contenu
groupe2.afficherContenu(utilisateur7);  // Utilisateur membre, devrait afficher le contenu

const utilisateur8 = new Utilisateur("Hannah");
groupe2.afficherContenu(utilisateur8);  // Utilisateur non membre, devrait lever une erreur    

*/