import {salutations} from '../models/salutations.model.js';
import express from 'express';

export const getSalutations = (req, res) => {
    res.json(salutations);
    //console.log(parsedSalutations[1]);
};

export const getSalutationHasard = (req, res) => {
    const { langue } = req.query;

    if (!langue) {
        const index = Math.floor(Math.random() * salutations.length);
        res.json(salutations[index]);
    }

    if(langue != "fr" && langue != "en" && langue != "es" && langue != "de"){
        return res.status(404).json({
            erreur: `Aucune salutation pour la langue ${langue}`
        });
    }

    else{
        const languesAutorisees = langue.split(',');

        const salutationsFiltrees = salutations.filter(s =>
        languesAutorisees.includes(s.code_langue));

        const index = Math.floor(Math.random() * salutationsFiltrees.length);
        res.json(salutationsFiltrees[index]);
    }

    const index = Math.floor(Math.random() * salutationsFiltrees.length);
    res.json(salutationsFiltrees[index]);
};

export const createSalutations = (req, res) => {
    const { code_langue, langue, message } = req.body;

    if (!code_langue || !langue || !message) {
        return res.status(400).json({
            erreur: "code_langue, la langue et le message sont requis"
        });
    }

    if (code_langue != "fr" && code_langue != "en" && code_langue != "es" && code_langue != "de") {
        return res.status(400).json({
            erreur: `Code de langue invalide: ${code_langue}`
        });
    }

    const nouvelleSalutation = {
        code_langue,
        langue,
        message
    };

    salutations.push(nouvelleSalutation);

    res.status(201).json({
        message: "Salutation créée avec succès",
        salutation: nouvelleSalutation
    });
};