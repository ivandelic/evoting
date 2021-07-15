/**
 *
 * Copyright (c) 2021, Oracle and/or its affiliates. All rights reserved.
 *
 */
import * as yup from 'yup';
import { Validator } from '../lib/decorators';
import { OchainController } from '../lib/ochain-controller';
import { Party } from './voting_quick_demo.model';
import { Vote } from './voting_quick_demo.model';


export class Voting_quick_demoController extends OchainController {

    public async init(params: any) {
        return;
    }

    //-----------------------------------------------------------------------------
    //Party
    //-----------------------------------------------------------------------------
    @Validator(Party)
    public async createParty(asset: Party) {
        return await asset.save();
    }
    
    public async getPartyById(id) {
        const asset = await Party.get(id);
        return asset;
    }
    
    @Validator(Party)
    public async updateParty(asset: Party) {
        return await asset.update();
    }
    
    @Validator(yup.string())
    public async deleteParty(id: string) {
        const result = await Party.delete(id);
        return result;
    }
    
    @Validator(yup.string())
    public async getPartyHistoryById(id: string) {
        const result = await Party.history(id);
        return result;
    }
    
    @Validator(yup.string(), yup.string())
    public async getPartyByRange(startId: string, endId: string) {
        const result = await Party.getByRange(startId, endId);
        return result;
    }


    //-----------------------------------------------------------------------------
    //Vote
    //-----------------------------------------------------------------------------
    @Validator(Vote)
    public async createVote(asset: Vote) {
        return await asset.save();
    }
    
    @Validator(yup.string())
    public async getVoteById(id: string) {
        const asset = await Vote.get(id);
        return asset;
    }
    
    @Validator(Vote)
    public async updateVote(asset: Vote) {
        return await asset.update();
    }
    
    @Validator(yup.string())
    public async deleteVote(id: string) {
        const result = await Vote.delete(id);
        return result;
    }
    
    @Validator(yup.string())
    public async getVoteHistoryById(id: string) {
        const result = await Vote.history(id);
        return result;
    }
    
    @Validator(yup.string(), yup.string())
    public async getVoteByRange(startId: string, endId: string) {
        const result = await Vote.getByRange(startId, endId);
        return result;
    }

    //-----------------------------------------------------------------------------
    
    /**
     * 
     * BDB sql rich queries can be executed in OBP CS/EE.
     * This method can be invoked only when connected to remote OBP CS/EE network.
     * 
     */
    @Validator(yup.string())
    public async executeQuery(query: string) {
        const result = await this.query(query);
        return result;
    }
    @Validator(yup.string(), yup.string(), yup.date())
    public async vote(validationNumber: string, preferredPartyId: string, voteTimestamp: Date) {
        try {
            let preferredParty = await this.getPartyById(preferredPartyId);
            var vote = new Vote({
                validationNumber: validationNumber,
                preferredPartyId: preferredParty.partyId,
                voteTimestamp: voteTimestamp
            });

            vote = await vote.save();
            
            return `Person with VN '${validationNumber}' voted successfully for party '${preferredParty.partyName}'`;
        } catch(error) {
            throw new Error(error.message);
        }

    }
}
