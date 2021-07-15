/**
 *
 * Copyright (c) 2021, Oracle and/or its affiliates. All rights reserved.
 *
 */
import ChaincodeSDK from './lib/chaincode';
import { Voting_quick_demoController } from './src/voting_quick_demo.controller';

ChaincodeSDK({
    chainCodeName: 'voting_quick_demo',
    chainCode: Voting_quick_demoController,
});
