/**
 *
 * Copyright (c) 2021, Oracle and/or its affiliates. All rights reserved.
 *
 */
import * as yup from 'yup';
import { Id, Mandatory, Validate, Default, Embedded, Derived, ReadOnly } from '../lib/decorators';
import { OchainModel } from '../lib/ochain-model';
import { STRATEGY } from '../lib/utils';
import { EmbeddedModel } from '../lib/ochain-embedded-model';
import { Token } from '../lib/token';

@Id('partyId')
export class Party extends OchainModel<Party> {
    
    public readonly assetType = 'party';

    @Mandatory()
    @Validate(yup.string().min(11).max(11))
    public partyId: string;

    @Mandatory()
    @Validate(yup.string())
    public partyName: string;

}

@Id('validationNumber')
export class Vote extends OchainModel<Vote> {
    
    public readonly assetType = 'vote';

    @Mandatory()
    @Validate(yup.string())
    public validationNumber: string;

    @Mandatory()
    @Validate(yup.date())
    public voteTimestamp: Date;

    @Mandatory()
    @Validate(yup.string())
    public preferredPartyId: string;

}
