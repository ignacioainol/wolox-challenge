const express = require('express');
const config = require('./server/config');

//database
require('./database');

//starting the server
const app = config(express());