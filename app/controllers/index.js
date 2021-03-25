import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

class IndexController extends Controller {
  @tracked foo = 'bar';
}

export default IndexController;
