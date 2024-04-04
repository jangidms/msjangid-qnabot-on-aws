/*********************************************************************************************************************
 *  Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.                                                *
 *                                                                                                                    *
 *  Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance    *
 *  with the License. A copy of the License is located at                                                             *
 *                                                                                                                    *
 *      http://www.apache.org/licenses/                                                                               *
 *                                                                                                                    *
 *  or in the 'license' file accompanying this file. This file is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES *
 *  OR CONDITIONS OF ANY KIND, express or implied. See the License for the specific language governing permissions    *
 *  and limitations under the License.                                                                                *
 *********************************************************************************************************************/

module.exports = {
    region: process.env.LAUNCH_OPTIONS_region || 'us-east-1',
    profile: 'default',
    publicBucket: process.env.LAUNCH_OPTIONS_publicBucket || '',
    publicPrefix: process.env.LAUNCH_OPTIONS_publicPrefix || 'artifacts/aws-ai-qna-bot',
    devEmail: process.env.LAUNCH_OPTIONS_adminEmail || '',
    ApprovedDomain: process.env.LAUNCH_OPTIONS_approvedDomain || 'NONE',
    Username: process.env.LAUNCH_OPTIONS_adminUsername || 'Admin',
    devEncryption: process.env.LAUNCH_OPTIONS_Encryption || 'ENCRYPTED',
    devPublicOrPrivate: process.env.LAUNCH_OPTIONS_publicOrPrivate || 'PRIVATE',
    devLanguage: process.env.LAUNCH_OPTIONS_Language || 'English',
    namespace: 'dev',
    LexBotVersion: process.env.LAUNCH_OPTIONS_LexBotVersion || 'LexV2 Only',
    LexV2BotLocaleIds: process.env.LAUNCH_OPTIONS_LexV2BotLocaleIds || 'en_US,es_US,fr_CA',
    stackNamePrefix: process.env.LAUNCH_OPTIONS_stackNamePrefix || 'QNA',
    skipCheckTemplate: false,
    noStackOutput: false,
    multiBucketDeployment: false,
    buildType: 'Custom',
    FulfillmentConcurrency: process.env.LAUNCH_OPTIONS_FulfillmentConcurrency || 1,
    EmbeddingsApi: process.env.LAUNCH_OPTIONS_EmbeddingsApi || 'SAGEMAKER',
    LLMApi: process.env.LAUNCH_OPTIONS_LLMApi || 'SAGEMAKER',
    InstallLexResponseBots: process.env.LAUNCH_OPTIONS_InstallLexResponseBots || true,
    DefaultKendraIndexId: process.env.LAUNCH_OPTIONS_DefaultKendraIndexId || '',
    devElasticSearchNodeCount: process.env.LAUNCH_OPTIONS_ElasticSearchNodeCount || 1,
    XraySetting: process.env.LAUNCH_OPTIONS_XraySetting || 'FALSE',
    EmbeddingsLambdaArn: process.env.LAUNCH_OPTIONS_EmbeddingsLambdaArn || '',
    LLMSagemakerInstanceType: process.env.LAUNCH_OPTIONS_LLMSagemakerInstanceType || 'ml.g5.12xlarge',
    LLMLambdaArn: process.env.LAUNCH_OPTIONS_LLMLambdaArn || '',
    ElasticSearchInstanceType: process.env.LAUNCH_OPTIONS_ElasticSearchInstanceType || 'm6g.large.search',
    VPCSubnetIdList: process.env.LAUNCH_OPTIONS_VPCSubnetIdList || '',
    VPCSecurityGroupIdList: process.env.LAUNCH_OPTIONS_VPCSecurityGroupIdList || '',
};

if (require.main === module) {
    if (process.argv.includes('buildType=AWSSolutions')) {
        module.exports.buildType = 'AWSSolutions';
        module.exports.publicBucket = '%%BUCKET_NAME%%';
        module.exports.publicPrefix = '%%SOLUTION_NAME%%/%%VERSION%%';
        module.exports.skipCheckTemplate = true;
        module.exports.noStackOutput = true;
    } else {
        module.exports.devEmail = process.argv[2] || process.env.LAUNCH_OPTIONS_devEmail || 'user@example.com';
        module.exports.region = process.argv[3] || process.env.LAUNCH_OPTIONS_region || 'us-east-1';
    }
    console.log(JSON.stringify(module.exports, null, 2));
}
