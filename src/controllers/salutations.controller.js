import {salutations} from '../models/salutations.model.js';
import express from 'express';

export const getSalutations = (req, res) => {
    res.json(salutations);
    //console.log(parsedSalutations[1]);
};

export const listePourLangue = (req, res) => {
    const params = req.params;

    if(!params.code_langue){
        return res.status(400).json({
            erreur: "le code de la langue est requis"
        })
    }

    if (params.code_langue != "fr" && params.code_langue != "en" && params.code_langue != "es" && params.code_langue != "de") {
        return res.status(400).json({
            erreur: `Code de langue invalide: ${params.code_langue}`
        });
    }

    else{
        const salutationsFiltrees = salutations.filter(includes(params.code_langue));

        if(!salutationsFiltrees){
            return res.status(404).json({
                erreur: "aucune salutation trouvée pour ce code de langue"
            })
        }

        res.json(salutationsFiltrees);
    }
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