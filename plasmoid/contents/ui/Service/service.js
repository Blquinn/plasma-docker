/*
 * Copyright (C) 2020 by David Baum <david.baum@naraesk.eu>
 *
 * This file is part of plasma-docker.
 *
 * plasma-docker is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * plasma-docker is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with plasma-docker.  If not, see <http://www.gnu.org/licenses/>.
 */

function getHeight(visible, height) {
    if(visible) {
        return height;
    } else {
        return 0;
    }
}

function startAndStopService(status, file, name){
    if (status) {
        startService(file, name);
    } else {
        stopService(file, name);
    }
}

function startService(file, name) {
    process.startService(file, name);
}

function stopService(file, name) {
    process.stopService(file, name);
}
