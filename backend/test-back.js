import { getArtistesByDate } from "./backend.mjs";
import { getScenesByName } from "./backend.mjs";
import { getArtistesByName } from "./backend.mjs";
import { getArtiste } from "./backend.mjs";
import { getScene } from "./backend.mjs";
import { getArtistesBySceneId } from "./backend.mjs";
import { getArtistesBySceneName } from "./backend.mjs";
import { updateArtiste } from "./backend.mjs";
import { createArtiste } from "./backend.mjs";
import { updateScene } from "./backend.mjs";
import { createScene } from "./backend.mjs";
import { loginUser } from "./backend.mjs";
import { isUserAuthenticated } from "./backend.mjs";
import { getImageUrl } from "./backend.mjs";


/* Test 1 : récupérer tous les artistes triés par date
try {
    const records = await getArtistesByDate();
    console.log(JSON.stringify(records, null, 2));
} catch (e) {
    console.error(e);
}
*/


/* Test 2 : récupérer toutes les scènes triées par nom
try {
    const records = await getScenesByName();
    console.log(JSON.stringify(records, null, 2));
} catch (e) {
    console.error(e);
}
*/


/* Test 3 : récupérer tous les artistes triés par ordre alphabétique
try {
    const records = await getArtistesByName();
    console.log(JSON.stringify(records, null, 2));
} catch (e) {
    console.error(e);
}
*/


/* Test 4 : récupérer un artiste à partir de son id
try {
    const record = await getArtiste("6j6afn6srz6sjay");
    console.log(JSON.stringify(record, null, 2));
} catch (e) {
    console.error(e);
}
*/


/* Test 5 : récupérer une scène à partir de son id
try {
    const record = await getScene("eyx5ax3gccyn4xf");
    console.log(JSON.stringify(record, null, 2));
} catch (e) {
    console.error(e);
}
*/


/* Test 6 : récupérer les artistes d'une scène à partir de son id
try {
    const records = await getArtistesBySceneId("eyx5ax3gccyn4xf");
    console.log(JSON.stringify(records, null, 2));
} catch (e) {
    console.error(e);
}
*/


/* Test 7 : récupérer les artistes d'une scène à partir de son nom
try {
    const records = await getArtistesBySceneName("Temple Saint-Martin");
    console.log(JSON.stringify(records, null, 2));
} catch (e) {
    console.error(e);
}
*/


/* Test 8 : modifier un artiste
try {
    const record = await updateArtiste("6j6afn6srz6sjay", {
        favori: true
    });
    console.log(JSON.stringify(record, null, 2));
} catch (e) {
    console.error(e);
}
*/


/* Test 9 : créer un artiste
try {
    const record = await createArtiste({
        nom_artiste: "Artiste Test",
        genre_musical: "Test",
        description_artiste: "Artiste de test",
        date_debut: "2025-12-25 20:00:00",
        favori: false
    });
    console.log(JSON.stringify(record, null, 2));
} catch (e) {
    console.error(e);
}
*/


/* Test 10 : modifier une scène
try {
    const record = await updateScene("eyx5ax3gccyn4xf", {
        capacite: 500
    });
    console.log(JSON.stringify(record, null, 2));
} catch (e) {
    console.error(e);
}
*/


/* Test 11 : créer une scène
try {
    const record = await createScene({
        nom_scene: "Scene Test",
        description_scene: "Scene de test",
        localisation: "Test",
        capacite: 100
    });
    console.log(JSON.stringify(record, null, 2));
} catch (e) {
    console.error(e);
}
*/


/* Test 12 : connexion utilisateur
try {
    const record = await loginUser("EMAIL_UTILISATEUR", "MOT_DE_PASSE");
    console.log(JSON.stringify(record, null, 2));
} catch (e) {
    console.error(e);
}
*/


/* Test 13 : vérifier si un utilisateur est authentifié
try {
    const record = await isUserAuthenticated("TOKEN_UTILISATEUR");
    console.log(JSON.stringify(record, null, 2));
} catch (e) {
    console.error(e);
}
*/


/* Test 14 : récupérer l'URL d'une image
try {
    const records = await getArtistesByDate();
    const url = getImageUrl(records[0], records[0].photo);
    console.log(url);
} catch (e) {
    console.error(e);
}
*/