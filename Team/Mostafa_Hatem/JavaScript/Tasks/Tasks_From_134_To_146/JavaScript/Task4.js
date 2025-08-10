// let re = /https?:\/\/                 // Match "http" optionally followed by "s", then "://"
//           (?:[-\w]+\.)?               // Non-capturing group: optional subdomain (letters, digits, hyphen, underscore) + a dot
//           ([-\w]+)                    // Capturing group #1: main domain name (letters, digits, hyphen, underscore)
//           \.\w+                       // A dot followed by the top-level domain (e.g., com, net)
//           (?:\.\w+)?                  // Non-capturing group: optional second-level TLD (e.g., ".co.uk")
//           \/?                         // Optional forward slash
//           .*                          // Match anything after (path, query string, etc.)
//         /i;                           // "i" flag → case-insensitive matching
