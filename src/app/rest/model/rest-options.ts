import { LoaderNames } from '../service/rest-data.service';
/**
 * Class to hold the necessary options for making a REST call.
 * @example
 * A typical options for a PUT call would be,
 * const option = {
 *      link : { href : '/posts/{postId}', mehtod : RestOptions.PUT,
 *      properties : { postId : this.post.id},
 *      requestBody : this.updatedPost,
 *      loaderNames : LoaderNames.service1
 * }
 * this.service.request<Post>(opttion).subscribe();
 */
export class RestOptions {

    /**
     * Static constants for HTTP protocol methods
     */
    public static readonly GET: string = 'GET';
    public static readonly POST: string = 'POST';
    public static readonly PUT: string = 'PUT';
    public static readonly DELETE: string = 'DELETE';


    /**
     * link - simple object to hold the url & method for http call
     * eg.
     * GET { href : 'http://xyz.com/posts/1', method : RestOptions.GET}
     */
    public link: {
        href: string;
        method: string;
    };

    /**
     * Optional property to send request body for POST, PUT calls
     */
    public requestBody?: any;

    /**
     * Optional KeyValue pair to remove placeholders from url
     * eg. if url has 'posts/{postId}?q={postName} then
     * properties object can be {postId : 2, postName : '*'}
     */
    public properties?: { [key: string]: any };

    /**
     * loaderNames - attribute name to be used for this REST call.
     * Refer {@link LoaderNames} Enum & {@link LoaderService}
     */
    public loaderNames?: LoaderNames;
}
