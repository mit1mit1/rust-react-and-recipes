# Shared Components

Shared mocks, utils, types and ui-components for use throughout the robo advice tools.

First, include the relevant subpackage in your tool by adding the relevant line to the tool's package.json dependencies:

`"@shared-ui/mocks": "link:(RELATIVE_PATH)/shared-ui/mocks"`

`"@shared-ui/components": "link:(RELATIVE_PATH)/shared-ui/components"`

etc.

Then import the component, mock, util or type as you would with any other import from an external library, e.g.:

`import { Locale } from '@shared-ui/types';`