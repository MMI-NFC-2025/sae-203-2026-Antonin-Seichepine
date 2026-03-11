// Projet Festicloze - SAÉ 203

import PocketBase from 'pocketbase';

// Connexion à PocketBase
const pb = new PocketBase('https://pb-festicloze.antonin-seichepine.fr');


// 1. Tous les artistes triés par date
export async function getArtistesByDate() {
    try {
        const data = await pb.collection('artistes').getFullList({
            sort: 'date_debut',
            expand: 'scene',
        });
        return data;
    } catch (error) {
        console.log('Une erreur est survenue', error);
        return [];
    }
}


// 2. Toutes les scènes triées par nom
export async function getScenesByName() {
    try {
        const data = await pb.collection('scenes').getFullList({
            sort: 'nom_scene',
        });
        return data;
    } catch (error) {
        console.log('Une erreur est survenue', error);
        return [];
    }
}


// 3. Tous les artistes triés par ordre alphabétique
export async function getArtistesByName() {
    try {
        const data = await pb.collection('artistes').getFullList({
            sort: 'nom_artiste',
            expand: 'scene',
        });
        return data;
    } catch (error) {
        console.log('Une erreur est survenue', error);
        return [];
    }
}


// 4. Infos d'un artiste par son id
export async function getArtiste(id) {
    try {
        const data = await pb.collection('artistes').getOne(id, {
            expand: 'scene',
        });
        return data;
    } catch (error) {
        console.log('Une erreur est survenue', error);
        return null;
    }
}


// 5. Infos d'une scène par son id
export async function getScene(id) {
    try {
        const data = await pb.collection('scenes').getOne(id);
        return data;
    } catch (error) {
        console.log('Une erreur est survenue', error);
        return null;
    }
}


// 6. Artistes d'une scène par son id, triés par date
export async function getArtistesBySceneId(sceneId) {
    try {
        const data = await pb.collection('artistes').getFullList({
            filter: `scene = "${sceneId}"`,
            sort: 'date_debut',
            expand: 'scene',
        });
        return data;
    } catch (error) {
        console.log('Une erreur est survenue', error);
        return [];
    }
}


// 7. Artistes d'une scène par son nom, triés par date
export async function getArtistesBySceneName(nomScene) {
    try {
        const data = await pb.collection('artistes').getFullList({
            filter: `scene.nom_scene = "${nomScene}"`,
            sort: 'date_debut',
            expand: 'scene',
        });
        return data;
    } catch (error) {
        console.log('Une erreur est survenue', error);
        return [];
    }
}


// 8. Ajouter ou modifier un artiste / une scène

export async function updateArtiste(id, newData) {
    try {
        const data = await pb.collection('artistes').update(id, newData);
        return data;
    } catch (error) {
        console.log('Une erreur est survenue', error);
        return null;
    }
}

export async function createArtiste(newData) {
    try {
        const data = await pb.collection('artistes').create(newData);
        return data;
    } catch (error) {
        console.log('Une erreur est survenue', error);
        return null;
    }
}

export async function updateScene(id, newData) {
    try {
        const data = await pb.collection('scenes').update(id, newData);
        return data;
    } catch (error) {
        console.log('Une erreur est survenue', error);
        return null;
    }
}

export async function createScene(newData) {
    try {
        const data = await pb.collection('scenes').create(newData);
        return data;
    } catch (error) {
        console.log('Une erreur est survenue', error);
        return null;
    }
}


// 9. Connexion utilisateur
export async function loginUser(email, password) {
    try {
        const authPb = new PocketBase('https://pb-festicloze.antonin-seichepine.fr');
        const authData = await authPb.collection('users').authWithPassword(email, password);
        return {
            token: authPb.authStore.token,
            user: authData.record,
        };
    } catch (error) {
        console.log('Une erreur est survenue', error);
        return null;
    }
}

export async function isUserAuthenticated(token) {
    try {
        if (!token) {
            return false;
        }

        const authPb = new PocketBase('https://pb-festicloze.antonin-seichepine.fr');
        authPb.authStore.save(token, null);
        await authPb.collection('users').authRefresh();
        return true;
    } catch (error) {
        console.log('Une erreur est survenue', error);
        return false;
    }
}

// Utilitaire : récupérer l'URL d'une image PocketBase
export function getImageUrl(record, recordImage) {
    return pb.files.getURL(record, recordImage);
}
