
import './index.scss'

import {config} from './js/bulldog'
import {getYear} from './js/year'
import $ from "jquery";

document.write('Key = ' + config.key)

$('.footer__year').html(getYear);