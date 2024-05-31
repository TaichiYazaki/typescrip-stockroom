#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { TypescriptStockroomStack } from '../lib/typescript-stockroom-stack';

const app = new cdk.App();
new TypescriptStockroomStack(app, 'TypescriptStockroomStack', {});
