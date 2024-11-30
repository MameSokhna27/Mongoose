require('dotenv').config();  
const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGO_URI;

// Connexion à MongoDB Atlas
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connexion réussie à MongoDB!');
  })
  .catch(err => {
    console.error('Erreur de connexion à MongoDB:', err);
  });

const express = require("express");

const app = express();
require("./dbConfig/dbConfig");
const Person = require('./Models/Person')

//1.Créer une nouvelle personne
/*const newPerson = new Person({
    name: 'John',
    age: 30,
    favoriteFoods: ['Pizza', 'Sushi']
});
  // Sauvegarder la personne dans la base de données
newPerson.save().then((doc) => {
     console.log(doc)
   })
   .catch(err => {
     console.error(err)
   })
//2.Créer plusieurs personnes avec Model.create(), en utilisant l'argument de la fonction arrayOfPeople.
const arrayOfPeople = [
        { name: 'Alice', age: 25, favoriteFoods: ['Burgers', 'Fries'] },
        { name: 'Bob', age: 35, favoriteFoods: ['Pasta', 'Salad'] },
        { name: 'Charlie', age: 28, favoriteFoods: ['Burritos', 'Tacos'] }
];
Person.create(arrayOfPeople)
  .then(people => {
    console.log('People created:', people);  // Affiche les personnes créées
  })
  .catch(err => {
    console.error('Error while creating people:', err);  // Gestion des erreurs
  });*/
  
  
//3.Utiliser model.find() pour rechercher dans votre base de données toutes les personnes ayant un nom donné, en utilisant Model.find() -> ; [Person]
Person.find({ name: 'John' })
  .then(people => {
    console.log('Personnes trouvées:', people);  // Affiche les personnes trouvées
  })
  .catch(err => {
    console.error('Erreur de recherche:', err);  // Gère les erreurs
  })
//4.Utilisez model.findOne() pour renvoyer un seul document correspondant de votre base de données Trouvez une seule personne qui a un certain aliment dans ses favoris, en utilisant Model.findOne() -> ; Person. Utilisez l'argument de fonction food comme clé de recherche.

/*Person.findOne({ favoriteFoods: 'Pizza' })
  .then(person => {
    console.log('Personne trouvée:', person);  // Affiche la personne trouvée
  })
  .catch(err => {
    console.error('Erreur lors de la recherche:', err);  // Gère les erreurs
  });*/
//5.Utilisez model.findById() pour rechercher votre base de données par _id Trouvez la (seule !!) personne ayant un _id donné, en utilisant Model.findById() -> ; Person. Utilisez l'argument de fonction personId comme clé de recherche.
/*const personId = '674b2c08fa1d71214ce7ba3e'; 
Person.findById(personId)
  .then(person => {
    console.log('Personne trouvée par ID:', person);  // Affiche la personne trouvée
  })
  .catch(err => {
    console.error('Erreur lors de la recherche par ID:', err);  // Gère les erreurs
  });*/


//6.Trouvez une personne par _id (utilisez l'une des méthodes ci-dessus) avec le paramètre personId comme clé de recherche. Ajoutez "hamburger" à la liste des aliments préférés de la personne (vous pouvez utiliser Array.push()). Puis - dans le callback find - save() la personne mise à jour.
/*const personId = '674b2c08fa1d71214ce7ba3e'; // ID charlie
Person.findById(personId)
  .then(person => {
    if (!person) {
      throw new Error('Personne non trouvée');
    }

    person.favoriteFoods.push('Hamburger');  // Ajoute 'Hamburger' à la liste des aliments favoris

    // Sauvegarde la personne mise à jour
    return person.save();  // Retourne la promesse de la sauvegarde
  })
  .then(updatedPerson => {
    console.log('Personne mise à jour:', updatedPerson);  // Affiche la personne mise à jour
})
.catch(err => {
  console.error('Erreur:', err);  // Gère toutes les erreurs, que ce soit pour la recherche ou la mise à jour
});*/
//7.Exécuter de nouvelles mises à jour sur un document à l'aide de model.findOneAndUpdate()
/*Person.findOneAndUpdate(
    { name: 'John' },  // Critère de recherche
    { age: 20 },       // Mise à jour du champ `age`
    { new: true }       // Retourne le document mis à jour
  )
    .then(updatedPerson => {
      console.log('Personne mise à jour:', updatedPerson);  // Affiche la personne mise à jour
    })
    .catch(err => {
      console.error('Erreur lors de la mise à jour:', err);  // Gère les erreurs
    });*/
//9. Supprimer un document avec findByIdAndRemove()
/*const personId = '674b37ecd388e33f1ee65ebc'; 
Person.findByIdAndDelete(personId)
  .then(data => {
    if (!data) {
      console.log('Aucune personne trouvée avec cet ID.');
    } else {
      console.log('Personne supprimée:', data);  // Affiche la personne supprimée
    }
  })
  .catch(err => {
    console.error('Erreur lors de la suppression:', err);  // Gère les erreurs
  });*/
//Supprimez toutes les personnes dont le nom est "Mary"
/*Person.deleteMany({ name: 'Mary' })
  .then(result => {
    console.log('Personnes supprimées:', result);  // Affiche le résultat de la suppression
  })
  .catch(err => {
    console.error('Erreur lors de la suppression:', err);  // Gère les erreurs
  });*/
//Trouvez des personnes qui aiment les burritos. Triez-les par nom, limitez les résultats à deux documents et masquez leur âge. Enchaînez .find(), .sort(), .limit(), .select(), puis .exec(). Passez le rappel done(err, data) à exec().
/*Person.find({ favoriteFoods: 'Burritos' })
  .sort({ name: 1 })       // Tri par nom
  .limit(2)                // Limite à 2 résultats
  .select('-age')          // Masque l'âge
  .then(data => {
    console.log('Résultats triés et limités:', data);  // Affiche les résultats triés et limités
  })
  .catch(err => {
    console.error('Erreur lors de la recherche:', err);  // Gère les erreurs
  });*/


app.listen(3000,()=>{
    console.log("server started");
})