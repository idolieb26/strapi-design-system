/**
 * 
   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.} operator 

   Link to the code: https://github.com/adobe/react-spectrum/blob/1e2b7f280a04ead83e21b27fa580eb189e5f4186/packages/%40react-aria/i18n/src/useDefaultLocale.ts#L28
 */
const DEFAULT_LOCALE = 'en-EN';

export const getDefaultLocale = () => {
  if (typeof navigator === 'undefined') {
    return DEFAULT_LOCALE;
  }

  if (navigator.language) {
    return navigator.language;
  }

  // @ts-expect-error this is not in the TS definition but is in the spec
  if (navigator.userLanguage) {
    // @ts-expect-error this is not in the TS definition but is in the spec
    return navigator.userLanguage;
  }

  return DEFAULT_LOCALE;
};
