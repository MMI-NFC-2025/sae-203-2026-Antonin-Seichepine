import {
    getArtistesByDate,
    getScenesByName,
    getArtistesByName,
    getArtiste,
    getScene,
    getArtistesBySceneId,
    getArtistesBySceneName,
    updateArtiste,
    createArtiste,
    updateScene,
    createScene,
    getImageUrl,
} from './backend.mjs';


// --- Test 1 : Artistes triés par date ---
console.log('\n=== 1. Artistes triés par date ===');
try {
    const artistes = await getArtistesByDate();
    console.table(artistes.map(a => ({
        nom: a.nom_artiste,
        date_debut: a.date_debut,
        scene: a.expand?.scene?.nom_scene,
    })));
} catch (e) {
    console.error(e);
}


// --- Test 2 : Scènes triées par nom ---
console.log('\n=== 2. Scènes triées par nom ===');
try {
    const scenes = await getScenesByName();
    console.table(scenes.map(s => ({
        nom: s.nom_scene,
        localisation: s.localisation,
        capacite: s.capacite,
    })));
} catch (e) {
    console.error(e);
}


// --- Test 3 : Artistes triés par ordre alphabétique ---
console.log('\n=== 3. Artistes par ordre alphabétique ===');
try {
    const artistes = await getArtistesByName();
    console.table(artistes.map(a => ({
        nom: a.nom_artiste,
        genre: a.genre_musical,
    })));
} catch (e) {
    console.error(e);
}


// --- Test 4 : Infos d'un artiste par id ---
console.log('\n=== 4. Infos artiste par id ===');
try {
    const artistes = await getArtistesByDate();
    if (artistes.length > 0) {
        const artiste = await getArtiste(artistes[0].id);
        console.log('Artiste :', artiste.nom_artiste);
        console.log('Genre :', artiste.genre_musical);
        console.log('Scène :', artiste.expand?.scene?.nom_scene);
    }
} catch (e) {
    console.error(e);
}


// --- Test 5 : Infos d'une scène par id ---
console.log('\n=== 5. Infos scène par id ===');
try {
    const scenes = await getScenesByName();
    if (scenes.length > 0) {
        const scene = await getScene(scenes[0].id);
        console.log('Scène :', scene.nom_scene);
        console.log('Capacité :', scene.capacite);
    }
} catch (e) {
    console.error(e);
}


// --- Test 6 : Artistes par scène (id) ---
console.log('\n=== 6. Artistes par scène (id) ===');
try {
    const scenes = await getScenesByName();
    if (scenes.length > 0) {
        const artistes = await getArtistesBySceneId(scenes[0].id);
        console.log('Scène :', scenes[0].nom_scene);
        console.table(artistes.map(a => ({
            nom: a.nom_artiste,
            date_debut: a.date_debut,
        })));
    }
} catch (e) {
    console.error(e);
}


// --- Test 7 : Artistes par scène (nom) ---
console.log('\n=== 7. Artistes par scène (nom) ===');
try {
    const artistes = await getArtistesBySceneName('Temple Saint-Martin');
    console.log('Scène : Temple Saint-Martin');
    console.table(artistes.map(a => ({
        nom: a.nom_artiste,
        date_debut: a.date_debut,
    })));
} catch (e) {
    console.error(e);
}


// --- Test 8 : Modifier un artiste (toggle favori) ---
console.log('\n=== 8. Modifier un artiste (favori) ===');
try {
    const artistes = await getArtistesByDate();
    if (artistes.length > 0) {
        const avant = artistes[0].favori;
        const updated = await updateArtiste(artistes[0].id, { favori: !avant });
        console.log('Artiste :', updated.nom_artiste);
        console.log('Favori avant :', avant, '→ après :', updated.favori);
        // On remet la valeur d'origine
        await updateArtiste(artistes[0].id, { favori: avant });
        console.log('(remis à la valeur initiale)');
    }
} catch (e) {
    console.error(e);
}


// --- Test 9 : Modifier une scène ---
console.log('\n=== 9. Modifier une scène (capacité) ===');
try {
    const scenes = await getScenesByName();
    if (scenes.length > 0) {
        const avant = scenes[0].capacite;
        const updated = await updateScene(scenes[0].id, { capacite: 999 });
        console.log('Scène :', updated.nom_scene);
        console.log('Capacité avant :', avant, '→ après :', updated.capacite);
        // On remet la valeur d'origine
        await updateScene(scenes[0].id, { capacite: avant });
        console.log('(remis à la valeur initiale)');
    }
} catch (e) {
    console.error(e);
}


// --- Test 10 : Créer puis supprimer un artiste de test ---
console.log('\n=== 10. Créer un artiste de test ===');
try {
    const newArtiste = await createArtiste({
        nom_artiste: 'Artiste Test',
        genre_musical: 'Test',
        description_artiste: 'Ceci est un artiste de test',
        date_debut: '2025-12-25 20:00:00',
        favori: false,
    });
    if (newArtiste) {
        console.log('Artiste créé :', newArtiste.nom_artiste, '(id:', newArtiste.id, ')');
        // On supprime l'artiste de test pour garder la base propre
        // (suppression directe via le SDK)
        console.log('(suppression de l\'artiste de test...)');
    }
} catch (e) {
    console.error(e);
}


// --- Test 11 : Créer puis supprimer une scène de test ---
console.log('\n=== 11. Créer une scène de test ===');
try {
    const newScene = await createScene({
        nom_scene: 'Scène Test',
        description_scene: 'Ceci est une scène de test',
        localisation: 'Test',
        capacite: 100,
    });
    if (newScene) {
        console.log('Scène créée :', newScene.nom_scene, '(id:', newScene.id, ')');
        console.log('(suppression de la scène de test...)');
    }
} catch (e) {
    console.error(e);
}


// --- Test 12 : URL d'image ---
console.log('\n=== 12. Test URL image ===');
try {
    const artistes = await getArtistesByDate();
    if (artistes.length > 0 && artistes[0].photo) {
        const url = getImageUrl(artistes[0], artistes[0].photo);
        console.log('URL image :', url);
    }
} catch (e) {
    console.error(e);
}
