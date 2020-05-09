import { MultiversalPageProps } from './MultiversalPageProps';
import { OnlyServerPageProps } from './OnlyServerPageProps';

/**
 * Dynamic (server) properties returned by getInitialProps or getServerProps for server-side rendered pages (using SSR)
 * Mind that those properties are generated by the server, for each request
 *
 * Multiversal page props are listed in MultiversalPageProps
 * Server-side page props are listed in SSRPageProps
 * Client-side page props are listed in SSGPageProps
 */
export type SSRPageProps<E extends OnlyServerPageProps = OnlyServerPageProps> = {
  isServerRendering: boolean;
} & MultiversalPageProps & E;
